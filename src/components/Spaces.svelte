<script>
    import { spaceList } from './stores.js';

    export let theme = 'Transperent';

    let spaces = $spaceList;
    let active = 'public';
</script>

<div class="spacesContainer sc_{theme}">
    <div class="header h_{theme}">
        <p class="title">Пространства</p>
        <div><svg class="btn" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="bbC_{theme}" width="16" height="16" rx="8" fill="#CCCCCC"/><path d="M12 4L12 9.9282L6 4L12 4Z" fill="white"/><path d="M4 12L4 6L10 12L4 12Z" fill="white"/><path d="M8 8L5 11" stroke="white" stroke-width="2"/><path d="M11 5L8 8" stroke="white" stroke-width="2"/></svg></div>
    </div>
    <div class="spacesList">
        {#each spaces as space}
            <div class="item i_{theme} {space.link === active ? 'active a_' + theme : ''}" on:click="{() => active = space.link}">
                # {space.name}
                {#if space.counter}
                    <span class="counter  c_{theme}">{space.counter}</span>
                {/if}
            </div>
        {/each}
        <svg class="btn" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="bbC_{theme}" width="16" height="16" rx="8" fill="#ccc"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 4H7V7H4V9H7V12H9V9H12V7H9V4Z" fill="white"/></svg>
    </div>
</div>

<style>
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
    padding: 0 8px;
    font-size: 18px;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
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

</style>