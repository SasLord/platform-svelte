<script>
	import Message from './components/Message.svelte';
	import Board from './components/Board.svelte';
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { archiveMessages } from './components/message.storage.js';

	document.body.style = 'margin: 0; padding: 0;';

	export let theme;
	theme = 'Transperent';

	let messages = [];
	messages = archiveMessages;
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
			type: 'msg',
			theme: theme
		}];
		value = '';
	}
	function changeTheme () {
		messages.map((msg) => msg.theme = theme );
		messages = messages;

		if (theme === 'Transperent') document.body.style = 'background-color: transperet';
		else if (theme === 'Biege') document.body.style = 'background-color: #FDF1E6';
		else document.body.style = 'background-color: #1E1E1E';
	}
	changeTheme();

	function handleMessage(event) {
		value = event.detail.text;
		addMsg();
	}

</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inter:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<div class="container">
	<div class="chatContainer">
		<div class="chatBox" bind:this={divChat}>
			{#each messages as message, i (message)}
				<Message {message} />
			{/each}
		</div>
		<div class="fixedBoard"><Board on:message={handleMessage}/></div>
	</div>
	<div class="container-right">
		<textarea class="chatMsg" name="newMessage" bind:value="{value}"></textarea>
		<button class="chatMsg" on:click|preventDefault={addMsg} type="submit">Добавить</button>
		<select class="chatMsg" bind:value={theme} on:change={changeTheme}>
			<option value="Transperent">Transperent</option>
			<option value="Biege">Biege</option>
			<option value="Black">Black</option>
		</select>
		<button class="chatMsg" type="button">Add Day</button>
	</div>
</div>

<style>
	.fixedBoard {
		margin: 0px 32px 32px 32px;
	}
	.container {
		display: flex;
	}
	.container-right {
		width: 400px;
		display: flex;
		flex-direction: column;
	}
	.chatContainer {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.chatBox {
		height: 100%;
		text-align: center;
		margin: 32px;
		overflow: auto;
		flex-grow: 1;
	}
	.chatBox::-webkit-scrollbar { width: 5px; height: 3px;}
	.chatBox::-webkit-scrollbar-button { display: none; background-color: #666; }
	.chatBox::-webkit-scrollbar-track-piece { background-color: #ddd; border-radius: 2px;}
	.chatBox::-webkit-scrollbar-thumb { height: 10px; background-color: #666; border-radius: 2px;}
	.chatMsg {
		width: 100%;
		margin: 0 auto;
	}
</style>