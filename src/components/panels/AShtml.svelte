<script>
    export let theme = 'Transperent';
    export let textHtml = 'Hello!';

</script>

<div class="hContainer hc_{theme}">
    {@html textHtml}
</div>

<style>

    .hContainer {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        width: 100%;

        box-sizing: border-box;
        overflow: auto;
    }
	.hc_Transperent { background-color: transparent; }
	.hc_Biege { background-color: #FDF1E6; }
    .hc_Black { background-color: #1E1E1E; }

	.hContainer::-webkit-scrollbar { width: 5px; height: 3px;}
	.hContainer::-webkit-scrollbar-button { display: none; background-color: #666; }
	.hContainer::-webkit-scrollbar-track-piece { background-color: #ddd; border-radius: 2px;}
	.hContainer::-webkit-scrollbar-thumb { height: 10px; background-color: #666; border-radius: 2px;}

</style>