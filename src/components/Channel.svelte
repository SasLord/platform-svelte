<script>
	import Caption from './Caption.svelte';
	import Message from './Message.svelte';
	import Board from './Board.svelte';
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { archiveMessages } from './stores.js';
	
	let messages = [];
	messages = archiveMessages;

	let divChat;
	let autoscroll;
	beforeUpdate(() => {
		autoscroll = divChat && (divChat.offsetHeight + divChat.scrollTop) > (divChat.scrollHeight - 20);
	});
	afterUpdate(() => {
		if (autoscroll) divChat.scrollTo(0, divChat.scrollHeight);
	});

	function handleMessage(event) {
		addMsg(event.detail.text);
	}

	function addMsg(t) {
		messages = [...messages, {
			avatar: '',
			name: 'Local',
			tag: '',
			text: t,
			date: new Date,
			type: 'msg',
			theme: theme
		}];
		console.log(t);
	}
	function changeSelTheme (t) {
		messages.map((msg) => msg.theme = t );
		messages = messages;
	}

	export let theme = 'Transperent';
	$: changeSelTheme(theme);

</script>

<div class="channelContainer ch_{theme}">
	<Caption title="# Общее" {theme} />
	<div class="chatBox" bind:this={divChat}>
		{#each messages as message, i (message)}
			<Message {message} />
		{/each}
	</div>
	<div class="fixedBoard"><Board on:message={handleMessage}/></div>
</div>

<style>
	.fixedBoard {
		margin: 0px 32px 32px 32px;
	}
	.channelContainer {
		width: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.ch_Transperent { background-color: transparent; box-shadow: inset 1px 0px 0px #E1E1E1; }
	.ch_Biege { background-color: #FDF1E6; box-shadow: inset 1px 0px 0px #EFE0D0; }
	.ch_Black { background-color: #1E1E1E; box-shadow: inset 1px 0px 0px #333333; }

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
</style>