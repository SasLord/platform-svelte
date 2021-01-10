<script>
    export let theme = 'Transperent';
    export let meetDate = new Date();
    export let meetTime = '';

    let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let strDate = meetDate.getDate() + ' ' + month[meetDate.getMonth()] + ', ' + days[meetDate.getDay()];

</script>

<div class="hContainer hc_{theme}">
    <div class="date d_{theme}">{strDate}</div>
    <div class="time t_{theme}">{meetTime}</div>
    <div class="buttons">
        <button class="btn ac_{theme}" type="button">Принять</button>
        <button class="btn re_{theme}" type="button">Отказаться</button>
    </div>
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

    .buttons {
        display: flex;
        justify-content: space-between;
    }
    .btn {
        width: calc(100% / 2 - 6px);
        height: 32px;
        font-weight: 500;
        border: 1px solid #E0E0E0;
        border-radius: 4px;
        margin: 0 0 12px 0;
        outline-style: none;
    }
    .ac_Transperent { background-color: #666; border: 1px solid #666; color: #fff; }
    .re_Transperent { background-color: #F2F2F2; border: 1px solid #E0E0E0; color: #333; }
    .ac_Biege { background-color: #65605C; border: 1px solid #65605C; color: #fff; }
    .re_Biege { background-color: #EFE0D0; border: 1px solid rgba(202, 193, 184, 0.5); color: #32302E; }
    .ac_Black { background-color: #B2B2B2; border: 1px solid #B2B2B2; color: #1A1A1A; }
    .re_Black { background-color: #333333; border: 1px solid #4D4D4D; color: #fff; }

    .date {
        margin: 0 auto;
        padding: 16px 12px 4px 12px;
        font-weight: 500;
        line-height: 18px;
        color: #666666;
    }
    .d_Transperent { color: #666; }
    .d_Biege { color: #65605C; }
    .d_Black { color: #808080; }

    .time {
        margin: 0 auto;
        padding: 0px 12px 16px 12px;
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;
        color: #000;
    }
    .t_Transperent { color: #000; }
    .t_Biege { color: #1A1A1A; }
    .t_Black { color: #E5E5E5; }

</style>