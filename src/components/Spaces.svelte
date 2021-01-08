<script>
    import { createEventDispatcher } from 'svelte';
    import { spaceList } from './stores.js';

    export let theme = 'Transperent';
    export let active = 'public';
    let value = '';
    let inputSpace;

    let spaces = $spaceList;
    let klAdd = false, lastActive = active;

    const dispatch = createEventDispatcher();

    function onSelect () {
        if (!lastActive) return;
        dispatch('select', {
			channel: lastActive
        });
    }

    function addSpace() {
        klAdd = true; lastActive = active;
        spaces = [...spaces, { name: '', link: '__newSpace', count: 0 }];
        active = '__newSpace';
    }
    function removeSpace() {
        spaces = spaces.slice(0, spaces.length - 1);
        value = '';
        klAdd = false; active = lastActive;
    }
    function handleKey(event) {
        if ((event.keyCode === 0xA) || (event.keyCode === 0xD)) {
            let link = value + Math.floor(Math.random() * Math.floor(9999));
            spaces = spaces.slice(0, spaces.length - 1);
            spaces = [...spaces, { name: value, link: link, count: 0 }];
            $spaceList = spaces;
            value = '';
            klAdd = false; active = link;
        } else if (event.keyCode === 0x1B) {
            removeSpace();
        }
    }

    let divBoard, dBoard = true;
    function toggleBoard() { dBoard = !dBoard }
</script>

<div class="{(dBoard) ? 'spacesContainer' : 'spacesContainerMin'} sc_{theme}" bind:this="{divBoard}">
    <div class="header h_{theme} {(dBoard) ? 'hP' : 'hNP'}">
        <p class="title {(dBoard) ? 'dBoard' : 'dBoardNone'}">Пространства</p>
        <div><svg on:click="{toggleBoard}" class="btn" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="bbC_{theme}" width="16" height="16" rx="8" fill="#CCCCCC"/><path d="M12 4L12 9.9282L6 4L12 4Z" fill="white"/><path d="M4 12L4 6L10 12L4 12Z" fill="white"/><path d="M8 8L5 11" stroke="white" stroke-width="2"/><path d="M11 5L8 8" stroke="white" stroke-width="2"/></svg></div>
    </div>
    {#if (dBoard)}
    <div class="spacesList">
        {#each spaces as space}
            <div class="item i_{theme} {(space.link === active) ? 'active a_' + theme : ''} {space.link === '__newSpace' ? 'noselect' : ''}"
            on:click="{() => { lastActive = active = space.link; onSelect() }}">
                # {space.name}
                {#if space.link === '__newSpace'}
                    <input class="newSpace ns_{theme}" bind:this="{inputSpace}" bind:value={value} on:keypress="{handleKey}" />
                {/if}
                {#if space.counter && space.name}
                    <span class="counter  c_{theme}">{space.counter}</span>
                {/if}
            </div>
        {/each}
        {#if klAdd}
            <svg on:click="{removeSpace}" class="btnRemove" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="btnRemoveFill" width="16" height="16" rx="8" fill="#ccc"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 4H7V7H4V9H7V12H9V9H12V7H9V4Z" fill="white"/></svg>
        {:else}
            <svg on:click="{addSpace}" class="btn" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="bbC_{theme}" width="16" height="16" rx="8" fill="#ccc"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 4H7V7H4V9H7V12H9V9H12V7H9V4Z" fill="white"/></svg>
        {/if}
    </div>
    {/if}
</div>

<style>

.dBoard { display: block; }
.dBoardNone { display: none; }
.spacesContainerMin {
    box-sizing: border-box;
    flex-basis: 60px;
    min-width: 60px;
    width: 100%;
    padding: 27px 22px;
    margin: 0 auto;
}

.spacesContainer {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
    background-color: #fff;
    color: #666;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: left;

    flex-basis: 256px;
    min-width: 256px;
    width: 100%;
    padding: 26px 16px;

    display: flex;
    flex-direction: column;
}
.sc_Transperent { background-color: transparent; box-shadow: inset 1px 0px 0px #E1E1E1; }
.sc_Biege { background-color: #FDF1E6; box-shadow: inset 1px 0px 0px #EFE0D0; }
.sc_Black { background-color: #1E1E1E; box-shadow: inset 1px 0px 0px #333333; }

.spacesList {
    display: flex;
    flex-direction: column;
}
.header {
    height: 18px;
    margin-bottom: 11px;
    font-size: 18px;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.hP { padding: 0 8px; }
.hNP { padding: 0; }
.h_Transperent { color: #000; }
.h_Biege { color: #000; }
.h_Black { color: #fff; }

.item {
    padding: 8px;
    margin-bottom: 4px;
    border-radius: 4px;
    color: #666;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    overflow-x: hidden;
    display: block;
}
.i_Transperent { color: #666; }
.i_Biege { color: #65605C; }
.i_Black { color: #999; }

.active {
    font-weight: 700;
    color: #333333;
    background-color: #F2F2F2;
}
.a_Transperent { color: #333; background-color: #F2F2F2; }
.a_Biege { color: #32302E; background-color: #EFE0D0; }
.a_Black { color: #E5E5E5; background-color: #333333; }

.counter {
    position: absolute;
    display: inline-block;
    top: 9px;
    right: 8px;
    color: #fff;
    background-color: #235594;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;

    height: 16px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 8px;
}
.c_Transperent { color: #fff; background-color: #235594; }
.c_Biege { color: #fff; background-color: #235594; }
.c_Black { color: #1E1E1E; background-color: #5A92D8; }

.btn {
    width: 16px;
    height: 16px;
    margin: 0 auto;
    cursor: pointer;
}
.bbC_Transperent { fill: #ccc; }
.bbC_Biege { fill: #CAC1B8; }
.bbC_Black { fill: #333; }

.btnRemove {
    width: 16px;
    height: 16px;
    margin: 0 auto;
    cursor: pointer;
    transform: rotate(45deg);
}
.btnRemoveFill { fill: #f00; }

.newSpace {
    padding: 0;
    margin: 0 0 0 0px;
    outline-style: none;
    font-family: 'IBM Plex Sans', sans-serif;
    background-color: transparent;
    color: #333;
    font-weight: 700;
    font-size: 14px;
}
.ns_Transperent { color: #333; }
.ns_Biege { color: #32302E; }
.ns_Black { color: #fff; }

.noselect {
    -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
}
</style>