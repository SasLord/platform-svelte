<script>
	import { appList } from './stores.js';

    export let theme = 'Transperent';
    let apps = $appList;

</script>

<div class="appsContainer ac_{theme}">
    {#each apps as appItem }
        <div class="button-ico">
            <div class="icon">{@html appItem.icon}</div>
        </div>
    {/each}
</div>

<style>

    .appsContainer {
        box-sizing: border-box;
        width: 60px;
        padding: 32px 18px;
        display: flex;
        flex-direction: column;
    }
	.ac_Transperent { background-color: transparent; }
	.ac_Biege { background-color: #FDF1E6; }
    .ac_Black { background-color: #1E1E1E; }
    
    .icon {
        width: 24px;
        height: 24px;
        margin: 0 auto 24px;
        cursor: pointer;
    }

</style>