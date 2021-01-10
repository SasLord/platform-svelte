<script>
    export let theme = 'Transperent';
    export let author = {
        src: '',
        name: 'Александр Алексеенко',
        date: new Date(),
    };

    let date = author.date;
    let sYear = date.getFullYear().toString().slice(-2);
    let sMonth = (date.getMonth()+1 < 10) ? ('0' + (date.getMonth()+1)) : (date.getMonth()+1);
    let sDay = (date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate();
    let sHours = (date.getHours() < 10) ? ('0' + date.getHours()) : date.getHours();
    let sMinutes = (date.getMinutes() < 10) ? ('0' + date.getMinutes()) : date.getMinutes();
    let strDate = sDay + '.' + sMonth + '.' + sYear + ', ' + sHours + ':' + sMinutes;
</script>

<div class="hContainer hc_{theme}">
    <img class="ava a_{theme}" src="{author.src}" alt="{author.name}">
    <div class="title t_{theme}">{author.name}</div>
    <div class="date d_{theme}">{strDate}</div>
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
        align-items: center;
    }
	.hc_Transperent { background-color: transparent; }
	.hc_Biege { background-color: #FDF1E6; }
    .hc_Black { background-color: #1E1E1E; }

    .ava {
        height: 32px;
        width: 32px;
        border: 1px solid rgba(50, 48, 46, 0.2);
        border-radius: 50%;
    }
    .a_Transperent { border: 1px solid rgba(50, 48, 46, 0.2); }
    .a_Biege { border: 1px solid rgba(50, 48, 46, 0.2); }
    .a_Black { border: 1px solid rgba(50, 48, 46, 0.2); }

    .title {
        margin-left: 8px;
        color: #000;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        flex-grow: 1;
    }
    .t_Transperent { color: #8C223E; }
    .t_Biege { color: #8C223E; }
    .t_Black { color: #D75B7C; }

    .date {
        font-weight: 500;
        font-size: 11px;
        line-height: 14px;
        color: rgba(101, 96, 92, 0.5);
        text-align: right;
    }
    .d_Transperent { color: rgba(101, 96, 92, 0.5); }
    .d_Biege { color: rgba(101, 96, 92, 0.5); }
    .d_Black { color: #666666; }

</style>