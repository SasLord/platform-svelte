export const archiveMessages = [{
    avatar: 'https://platform.exhale24.ru/images/photo-1.png',
    name: 'Александр Алексеенко',
    tag: '',
    text: 'ну да, на клиенте все равно мы забиваем на это всё пока. CoreException/CoreError - а где это посмотреть, что-то по коду не найду такого? Или это nodejs`ное что-то?',
    date: new Date(2020, 11, 28, 10, 15),
    theme: ''
}, {
    avatar: 'https://platform.exhale24.ru/images/photo-2.png',
    name: 'Андрей Платов',
    tag: '# Общее',
    text: '<p>наше</p><p>хм походу после всех переписываний исчело за неиспользованием</p><p>но думаю появится когда будем четче обрабатывать <a class="link-aSide-1" href="#">Ошибки</a></p>',
    date: new Date(2020, 11, 28, 10, 31),
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
    date: new Date(2020, 11, 28, 12, 30),
    theme: ''
}];