<script>
    export let theme = 'Transperent';
    export let member = {
        src: '',
        name: 'Александр Алексеенко',
        status: 'performer',
    };
    const descStatus = {
        performer: 'Исполнитель',
        accept: 'Принял',
        reject: 'Отказался',
        undefined: 'Косяк!'
    };
</script>

<div class="hContainer hc_{theme}">
    <img class="ava a_{theme}" src="{member.src}" alt="{member.name}">
    <div class="block">
        <div class="title t_{theme}">{member.name}</div>
        <div class="status {member.status}_{theme}">{descStatus[member.status]}</div>
    </div>
</div>

<style>

    .block {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .hContainer {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        width: 100%;

        box-sizing: border-box;
        margin-bottom: 16px;
        display: flex;
    }
	.hc_Transperent { background-color: transparent; }
	.hc_Biege { background-color: #FDF1E6; }
    .hc_Black { background-color: #1E1E1E; }

    .ava {
        height: 32px;
        width: 32px;
        margin-right: 8px;
        border: 1px solid rgba(50, 48, 46, 0.2);
        border-radius: 50%;
    }
    .a_Transperent { border: 1px solid rgba(50, 48, 46, 0.2); }
    .a_Biege { border: 1px solid rgba(50, 48, 46, 0.2); }
    .a_Black { border: 1px solid rgba(50, 48, 46, 0.2); }

    .title {
        color: #000;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
    }
    .t_Transperent { color: #8C223E; }
    .t_Biege { color: #8C223E; }
    .t_Black { color: #D75B7C; }

    .status {
        font-weight: 500;
        font-size: 11px;
        line-height: 14px;
        color: #65605C;
    }
    .performer_Transperent { color: #65605C; }
    .performer_Biege { color: #65605C; }
    .performer_Black { color: #666666; }
    .accept_Transperent { color: #34747E; }
    .accept_Biege { color: #34747E; }
    .accept_Black { color: #4396A2; }
    .reject_Transperent { color: #BF3029; }
    .reject_Biege { color: #BF3029; }
    .reject_Black { color: #BF3029; }
    .undefined_Transperent { color: #65605C; }
    .undefined_Biege { color: #65605C; }
    .undefined_Black { color: #666666; }

</style>