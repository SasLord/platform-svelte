<script>
    export let theme = 'Transperent';
    export let desc = '';
</script>

<div class="hContainer hc_{theme}">
    {@html desc}
</div>

<style>

    .hContainer {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        width: 100%;

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }
	.hc_Transperent { color: #505050; background-color: transparent; }
	.hc_Biege { color: #65605c; background-color: #FDF1E6; }
    .hc_Black { color: #b2b2b2; background-color: #1E1E1E; }

</style>