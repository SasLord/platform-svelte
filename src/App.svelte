<script>
	import Channel from './components/Channel.svelte';

	document.body.style = 'margin: 0; padding: 0;';
	
	let value = '';
	let selTheme = 'Transperent';

	let x;
	let y;
	let divFly, divHider;

	function mousedown (event) {
		x = event.offsetX;
		y = event.offsetY;
		divHider.style = 'display: block';
		window.addEventListener('mousemove', handleMousemove);
		window.addEventListener('mouseup', handleMouseup);
	}
	function handleMousemove(event) {
		divFly.style = 'top: ' + (event.clientY - y - 2) + 'px; left: ' + (event.clientX - x - 2) + 'px;';
	}
	function handleMouseup(event) {
		divHider.style = 'display: none';
		window.removeEventListener('mousemove', handleMousemove);
		window.removeEventListener('mouseup', handleMouseup);
	}
</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inter:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<div class="container">
	<div class="flyContainer noselect" bind:this={divFly}>
		<div class="header" on:mousedown={mousedown}></div>
		<!--<textarea class="chatMsg" name="newMessage" bind:value="{value}"></textarea>
		<button class="chatMsg" on:click|preventDefault={addMsg} type="submit">Добавить</button>-->
		<div class="chatMsg label">Theme:</div>
		<select class="chatMsg sel" bind:value={selTheme} on:change="{Channel.theme = selTheme}">
			<option value="Transperent">Transperent</option>
			<option value="Biege">Biege</option>
			<option value="Black">Black</option>
		</select>
	</div>
	<div bind:this={divHider} class="hider"></div>
	<Channel theme={selTheme} />
</div>

<style>

	.container {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
	}
	.hider {
		display: none;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(255, 255, 255, 0.3);
		z-index: 90;
	}
	.flyContainer {
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 12px;
		line-height: 20px;
		text-align: center;
		background-color: #F2F2F2;
		border: 1px solid #E0E0E0;
		border-radius: 6px;
		padding-bottom: 10px;
		position: absolute;
		top: calc(100% - 80px);
		left: calc(100% - 400px);
		width: 300px;
		display: flex;
		flex-direction: column;

		z-index: 100;
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	}
	.header {
		width: calc(100% - 2px);
		height: 5px;
		background-color: #E0E0E0;
		border: 1px solid #E0E0E0;
		border-radius: 4px 4px 0px 0px;
		cursor: pointer;
		z-index: 200;
	}
	.header:hover {
		background-color: #aaa;
		border: 1px solid #aaa;
	}
	.chatMsg {
		width: 100%;
		margin: 0 auto;
	}
	.sel {
		font-size: 12px;
		padding: 0;
		width: calc(100% - 20px);
		outline-style: none;
	}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>