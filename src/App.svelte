<script>
	import Message from './components/Message.svelte';
	import { beforeUpdate, afterUpdate } from 'svelte';

	export let theme;
	theme = 'Transperent';

	let messages = [{
		avatar: 'https://platform.exhale24.ru/images/photo-1.png',
		name: 'Александр Алексеенко',
		tag: '',
		text: 'ну да, на клиенте все равно мы забиваем на это всё пока. CoreException/CoreError - а где это посмотреть, что-то по коду не найду такого? Или это nodejs`ное что-то?',
		date: new Date(2020, 11, 28, 10, 15),
		theme: ''
	}, {
		avatar: 'https://platform.exhale24.ru/images/photo-2.png',
		name: 'Андрей Платов',
		tag: '',
		text: '<p>наше</p><p>хм походу после всех переписываний исчело за неиспользованием</p><p>но думаю появится когда будем четче обрабатывать <a class="link-aSide-1" href="#">Ошибки</a></p>',
		date: new Date(2020, 11, 28, 10, 31),
		theme: ''
	}, {
		avatar: '',
		name: 'Сергей Буевич',
		tag: '',
		text: `<p>в rpc.ts объявлен</p><pre>export interface RpcError {
  code: number
  message?: string
  data?: any
}</pre>
<p>Надо бы придумать, что за code numbers там будут для нотификаций клиента об ошибках сервера. Сделал, чтобы сервер все эксепшны заворачивал в еррор респонз с этим RpcError'ом, тока код непонятно какой ставить )</p>`,
		date: new Date(2020, 11, 28, 12, 30),
		theme: ''
	}];

	let value = '';

	let divChat;
	let autoscroll;
	beforeUpdate(() => {
		autoscroll = divChat && (divChat.offsetHeight + divChat.scrollTop) > (divChat.scrollHeight - 20);
	});
	afterUpdate(() => {
		if (autoscroll) divChat.scrollTo(0, divChat.scrollHeight);
	});

	function addMsg() {
		messages = [...messages, {
			avatar: '',
			name: 'Local',
			tag: '',
			text: value,
			date: new Date,
			theme: theme
		}];
		value = '';
	}
	function changeTheme () {
		messages.map((msg) => msg.theme = theme );
		messages = messages;
	}
	changeTheme();
</script>

<div class="container">
<div class="chatBox" bind:this={divChat}>
	{#each messages as message, i (message)}
		<Message {message} />
	{/each}
</div>
<textarea class="chatMsg" name="newMessage" bind:value="{value}"></textarea>
<button class="chatMsg" on:click|preventDefault={addMsg} type="submit">Добавить</button>
<select class="chatMsg" bind:value={theme} on:change={changeTheme}>
	<option value="Transperent">Transperent</option>
	<option value="Biege">Biege</option>
	<option value="Black">Black</option>
</select>
</div>

<style type="text/scss">
	.container {
		display: flex;
		flex-direction: column;
	}
	.chatBox {
		width: 500px;
		height: 400px;
		text-align: center;
		margin: 10px auto;
		overflow: auto;
	}
	.chatBox::-webkit-scrollbar { width: 5px; height: 3px;}
	.chatBox::-webkit-scrollbar-button { display: none; background-color: #666; }
	.chatBox::-webkit-scrollbar-track-piece { background-color: #fff;}
	.chatBox::-webkit-scrollbar-thumb { height: 10px; background-color: #666; border-radius: 2px;}
	.chatMsg {
		width: 500px;
		margin: 0 auto;
	}
</style>