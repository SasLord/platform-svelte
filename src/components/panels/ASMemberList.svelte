<script>
    import ASMember from './ASMember.svelte';

    export let theme = 'Transperent';
    export let members = '';
</script>

<div class="hContainer hc_{theme}">
    {#each members as member (member) }
        <ASMember {member} {theme} />
    {/each}
</div>

<style>

    .hContainer {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        width: 100%;

        box-sizing: border-box;
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
    }
	.hc_Transperent { background-color: transparent; }
	.hc_Biege { background-color: #FDF1E6; }
    .hc_Black { background-color: #1E1E1E; }

</style>