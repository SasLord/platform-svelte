<script>

    export let theme = 'Transperent';
    export let title = 'Title';

</script>

<div class="hContainer hc_{theme}">
    <p class="title t_{theme}">{title}</p>
    <div class="icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="bbC_{theme}" width="16" height="16" rx="8" fill="#CCCCCC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.87928 4.46447L4.46507 5.87868L6.58639 8L4.46507 10.1213L5.87928 11.5355L8.0006 9.41421L10.1219 11.5355L11.5361 10.1213L9.41482 8L11.5361 5.87868L10.1219 4.46447L8.0006 6.58579L5.87928 4.46447Z" fill="white"/></svg></div>
</div>

<style>

    .hContainer {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 14px;
        line-height: 20px;
        text-align: left;

        box-sizing: border-box;
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
    }
	.hc_Transperent { background-color: transparent; }
	.hc_Biege { background-color: #FDF1E6; }
    .hc_Black { background-color: #1E1E1E; }

    .title {
        color: #000;
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
    }
    .t_Transperent { color: #000; }
    .t_Biege { color: #000; }
    .t_Black { color: #fff; }

    p {
        margin: 0;
        padding: 0;
    }
    .icon {
        width: 16px;
        height: 16px;
        margin-top: 3px;
        cursor: pointer;
    }

    .bbC_Transperent { fill: #ccc; }
    .bbC_Biege { fill: #CAC1B8; }
    .bbC_Black { fill: #333; }

</style>