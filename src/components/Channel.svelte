<script>
	import Spaces from './Spaces.svelte';
	import Caption from './Caption.svelte';
	import Message from './Message.svelte';
	import Board from './Board.svelte';
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { spaceList, archiveMessages } from './stores.js';
	
	let selChannel = 'all';
	let titleChannel = '# ';
	function changeChannel() {
		let finded;
		$spaceList.map((spc) => {if (spc.link === selChannel) finded = spc});
		titleChannel = '# ' + finded.name;
	}
	changeChannel();

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
	}
	function changeSelTheme (t) {
		messages.map((msg) => msg.theme = t );
		messages = messages;
	}

	export let theme = 'Transperent';
	changeSelTheme(theme);

</script>

<div class="container">
	<Spaces {theme} active={selChannel} on:select={(event) => { selChannel = event.detail.channel; changeChannel()}} />
	<div class="channelContainer ch_{theme}">
		<Caption title={titleChannel} {theme} />
		<div class="chatBox" bind:this={divChat}>
			{#each messages as message, i (message)}
				<Message {message} />
			{/each}
		</div>
		<div class="fixedBoard"><Board on:message={(event) => addMsg(event.detail.text)}/></div>
	</div>
</div>

<style>
	.container {
		display: flex;
	}
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