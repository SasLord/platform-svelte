<script>
    import ASMeetInfo from './ASMeetInfo.svelte';
    import ASMemberList from './ASMemberList.svelte';

    export let theme = 'Transperent';
    export let meet = {
        meetDate: new Date(),
        meetTime: 'XX:XX - XX:XX',
        members: [{
            src: '', name: '', status: 'accept'
        }]
    };

</script>

<div class="hContainer hc_{theme}">
    <ASMeetInfo {theme} meetDate={meet.meetDate} meetTime={meet.meetTime} />
    <ASMemberList {theme} members={meet.members} />
</div>

<style>

    .hContainer {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        width: 100%;

        box-sizing: border-box;
        margin-bottom: 32px;
        display: flex;
        flex-direction: column;
    }
	.hc_Transperent { background-color: transparent; }
	.hc_Biege { background-color: #FDF1E6; }
    .hc_Black { background-color: #1E1E1E; }

</style>