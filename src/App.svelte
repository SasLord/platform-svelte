<script>
	import ThemeSelector from './components/ThemeSelector.svelte';
	import Channel from './components/Channel.svelte';
	import AppsPanel from './components/panels/AppsPanel.svelte';
	import ASidePanel from './components/panels/ASidePanel.svelte';

	document.body.style = 'margin: 0; padding: 0;';
	
	let selTheme = 'Transperent';
	let aSide = true;

	function aSideClose(event) {
		if (event.detail.click === 'close') aSide = !aSide;
	}

</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inter:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<ThemeSelector theme={selTheme} on:change={(event) => selTheme = event.detail.theme} />
<div class="container">
	<AppsPanel theme={selTheme} />
	<Channel theme={selTheme} />
	<div class={(aSide) ? 'aSide' : 'aSideHide'}><ASidePanel theme={selTheme} on:action={aSideClose} /></div>
</div>

<style>

	.container {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
	}
	.aSide {
		display: block;
		box-sizing: border-box;
		width: 404px;
		min-width: 404px;
		max-width: 404px;
		height: 100vh;
	}
	.aSideHide { display: none; }

</style>