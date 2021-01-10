<script>
    import ASHeader from './ASHeader.svelte';
    import ASAuthor from './ASAuthor.svelte';
    import ASMeeting from './ASMeeting.svelte';

    export let theme = 'Transperent';
    let meet = {
        meetDate: new Date(2020, 10, 30, 9, 0),
        meetTime: '09:00 — 10:30',
        members: [{
            src: 'https://platform.exhale24.ru/images/photo-1.png',
            name: 'Александр Алексеенко',
            status: 'accept',
        }, {
            src: 'https://platform.exhale24.ru/images/photo-3.png',
            name: 'Сергей Буевич',
            status: 'accept',
        }, {
            src: 'https://platform.exhale24.ru/images/photo-2.png',
            name: 'Андрей Платов',
            status: 'reject',
        }],
        meetDesc: '<p>По спейсам и чатам решаем оставить следующий концепт:</p><ul><li>По-прежнему один чат на спейс.<li>Секьюрити права свои на каждый спейс.<li>Для маркировки объектов и документов введём (позже) тэги, возможно и супертэги.<li>Документы вроде "Meeting minutes" создаются в спейсах, куда есть доступ всем нужным сотрудникам, можно будет их фильтровать по тэгам.<li>Нужно решить (можно позже), где отображать на UI тэги и типы объектов.</ul><p>Все верно?</p>',
    };

</script>

<div class="aSideContainer as_{theme}">
    <ASHeader {theme} title="Обсуждаем новый дизайнтайм-лайна" />
    <ASAuthor {theme} author={{ src: 'https://platform.exhale24.ru/images/photo-1.png', name: 'Александр Алексеенко', date: new Date(2020, 10, 30, 15, 30) }} />
    <ASMeeting {theme} {meet} />
</div>

<style>

    .aSideContainer {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 14px;
        line-height: 20px;
        text-align: left;

        box-sizing: border-box;
        width: 404px;
        min-width: 404px;
        max-width: 404px;
        padding: 24px 32px;
        display: flex;
        flex-direction: column;
    }
	.as_Transperent { background-color: transparent; box-shadow: inset 1px 0px 0px #E1E1E1; }
	.as_Biege { background-color: #FDF1E6; box-shadow: inset 1px 0px 0px #EFE0D0; }
    .as_Black { background-color: #1E1E1E; box-shadow: inset 1px 0px 0px #333333; }

</style>