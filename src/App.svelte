<script>
	import ThemeSelector from './components/ThemeSelector.svelte';
	import Channel from './components/Channel.svelte';

	document.body.style = 'margin: 0; padding: 0;';
	
	let selTheme = 'Transperent';

</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inter:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<div class="container">
	<ThemeSelector theme={selTheme} on:change={(event) => selTheme = event.detail.theme} />
	<Channel theme={selTheme} />
</div>

<style>

	.container {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
	}

</style>