import { writable } from 'svelte/store';

export const theme = writable('Biege');

export let appList = writable([{
        name: 'Finder', 
        icon: '<svg fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7" stroke="#333333" stroke-width="2"/><circle cx="8.5" cy="8.5" r="1.5" fill="#333333"/><path d="M15 15L21 21" stroke="#333333" stroke-width="2" stroke-linejoin="round"/></svg>', 
        link : ''
    }, {
        name: 'Pulse', 
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14H4L8 7L12 16L16 11L20 13H24" stroke="#333333" stroke-width="2" stroke-linejoin="round"/></svg>', 
        link : ''
    }, {
        name: 'Chat', 
        icon: '<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><style>.st0{fill:none;stroke:#333;stroke-width:2}</style><path class="st0" d="M9 10c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-2l2 .5V20l-2-2h-8c-1.1 0-2-.9-2-2v-6z"/><path class="st0" d="M15 7V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2l-2 .4V16l2-2h4"/></svg>', 
        link : ''
    }, {
        name: 'Files', 
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 10C11 8.89543 11.8954 8 13 8H17.1716C17.702 8 18.2107 8.21071 18.5858 8.58579L20.4142 10.4142C20.7893 10.7893 21 11.298 21 11.8284V20C21 21.1046 20.1046 22 19 22H13C11.8954 22 11 21.1046 11 20V10Z" stroke="#333333" stroke-width="2"/><path d="M13 8V6.82843C13 6.29799 12.7893 5.78929 12.4142 5.41421L10.5858 3.58579C10.2107 3.21071 9.70201 3 9.17157 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H10" stroke="#333333" stroke-width="2"/></svg>', 
        link : ''
    }, {
        name: 'Tasks', 
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#333333" stroke-width="2"/><path d="M8 10L12 14L23 3" stroke="#333333" stroke-width="2" stroke-linejoin="round"/></svg>', 
        link : ''
    }]);

export let spaceList = writable([{
        name: 'Все',
        link: 'all',
        counter: 0
    }, {
        name: 'Общее',
        link: 'public',
        counter: 24
    }, {
        name: 'Офис Новосибирск',
        link: 'office-NSK',
        counter: 0
    }, {
        name: 'Офис Москва',
        link: 'office-MSK',
        counter: 9
    }, {
        name: 'Все сотрудники',
        link: 'members',
        counter: 0
    }, {
        name: 'Флуд',
        link: 'flood',
        counter: 0
    }, {
        name: 'События',
        link: 'events',
        counter: 0
    }]);

export const archiveMessages = [{
    avatar: 'https://platform.exhale24.ru/images/photo-1.png',
    name: 'Александр Алексеенко',
    tag: '',
    text: 'ну да, на клиенте все равно мы забиваем на это всё пока. CoreException/CoreError - а где это посмотреть, что-то по коду не найду такого? Или это nodejs`ное что-то?',
    date: new Date(2020, 10, 28, 10, 15),
    type: 'msg',
    theme: ''
}, {
    date: new Date(),
    text: 'сегодня',
    type: 'text',
    theme: ''
}, {
    avatar: 'https://platform.exhale24.ru/images/photo-2.png',
    name: 'Андрей Платов',
    tag: '# Общее',
    text: '<p>наше</p><p>хм походу после всех переписываний исчело за неиспользованием</p><p>но думаю появится когда будем четче обрабатывать <a class="link-aSide-1" href="#">Ошибки</a></p>',
    date: new Date(2020, 10, 28, 10, 31),
    type: 'msg',
    theme: ''
}, {
    avatar: '29',
    name: 'ноября',
    tag: '',
    date: new Date(2020, 10, 29),
    type: 'date',
    theme: ''
}, {
    avatar: '',
    name: 'Сергей Буевич',
    tag: '',
    text: `<p>в rpc.ts объявлен</p><pre>export interface RpcError {
    code: number
    message?: string
    data?: any
}</pre>
<p>Надо бы придумать, что за code numbers там будут для нотификаций клиента об ошибках сервера. Сделал, чтобы сервер все эксепшны заворачивал в еррор респонз с этим RpcError'ом, тока код непонятно какой ставить )</p>`,
    date: new Date(2020, 10, 28, 12, 30),
    type: 'msg',
    theme: ''
}, {
    avatar: 'https://platform.exhale24.ru/images/photo-2.png',
    name: 'Андрей Платов',
    tag: '# Общее',
    text: '<p>наше</p><p>хм походу после всех переписываний исчело за неиспользованием</p><p>но думаю появится когда будем четче обрабатывать <a class="link-aSide-1" href="#">Ошибки</a></p>',
    date: new Date(2020, 10, 28, 10, 31),
    type: 'msg',
    theme: ''
}, {
    avatar: '30',
    name: 'ноября',
    tag: '',
    date: new Date(2020, 10, 30),
    type: 'date',
    theme: ''
}, {
    avatar: 'https://platform.exhale24.ru/images/photo-1.png',
    name: 'Александр Алексеенко',
    tag: '',
    text: 'ну да, на клиенте все равно мы забиваем на это всё пока. CoreException/CoreError - а где это посмотреть, что-то по коду не найду такого? Или это nodejs`ное что-то?',
    date: new Date(2020, 10, 28, 10, 15),
    type: 'msg',
    theme: ''
}];
