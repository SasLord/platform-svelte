<script>
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';

    const dispatch = createEventDispatcher();

    let value = '';
    function onMessage () {
        if (!value) return;
        dispatch('message', {
			text: value
        });
        value = '';
    }
    function handleKey(event) {
        if ((event.ctrlKey) && ((event.keyCode === 0xA) || (event.keyCode === 0xD))) onMessage();
    }

    let divBoard, dBoard = true;
	function toggleBoard () {
		dBoard = !dBoard;
		(dBoard) ? divBoard.style = "height: 145px; min-height: 145px;" : divBoard.style = "height: 5px; min-height: 5px;";
	}

</script>

<div bind:this={divBoard} class="board">
    {#if dBoard}
    <textarea in:fade out:fade class="board__msgText" name="msgText" id="msgText" placeholder="Написать в # Общее" bind:value="{value}" on:keypress="{handleKey}"></textarea>
    <div in:fade out:fade class="board__panel">
        <div class="board__panel-icons">
            <svg class="board__panel-icons-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.03906 18H13.1094C15.5234 18 17.0859 16.6953 17.0859 14.7188C17.0859 13.2266 15.8125 12.0781 14.2891 12.0391V11.9766C15.5938 11.8125 16.5781 10.8359 16.5781 9.53906C16.5781 7.78125 15.2266 6.72656 12.9219 6.72656H9.03906C7.98438 6.72656 7.38281 7.35156 7.38281 8.46094V16.2656C7.38281 17.375 7.98438 18 9.03906 18ZM10.6953 11.2422V9H12.0234C12.8594 9 13.3594 9.42188 13.3594 10.1172C13.3594 10.7969 12.8281 11.2422 11.9766 11.2422H10.6953ZM10.6953 15.7266V13.1406H12.1328C13.125 13.1406 13.7188 13.6094 13.7188 14.4141C13.7188 15.2656 13.1328 15.7266 12.1094 15.7266H10.6953Z" fill="#65605C"/></svg>
            <svg class="board__panel-icons-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8991 7.88485C10.9562 7.24246 11.4944 6.75 12.1393 6.75C12.8705 6.75 13.4443 7.37704 13.3795 8.10533L12.6009 16.8651C12.5438 17.5075 12.0056 18 11.3607 18C10.6295 18 10.0557 17.373 10.1205 16.6447L10.8991 7.88485Z" fill="#65605C"/></svg>
            <svg class="board__panel-icons-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0078 18.1875C14.8203 18.1875 16.5469 16.7969 16.5469 14.5938C16.5469 12.8828 15.5156 11.9219 13.125 11.4453L11.9375 11.2031C10.6016 10.9375 10.0625 10.5078 10.0625 9.8125C10.0625 8.98438 10.8359 8.4375 12 8.4375C12.9688 8.4375 13.6953 8.78906 14.0703 9.64062C14.3359 10.125 14.6641 10.3359 15.1953 10.3359C15.7969 10.3359 16.2031 9.95312 16.2031 9.39062C16.2031 9.1875 16.1719 9.02344 16.1172 8.86719C15.6172 7.39844 14.0625 6.53125 12 6.53125C9.49219 6.53125 7.69531 7.89844 7.69531 9.96094C7.69531 11.6406 8.79688 12.7188 11.0469 13.1641L12.2422 13.3984C13.6562 13.6875 14.1875 14.1094 14.1875 14.8516C14.1875 15.6797 13.3281 16.2891 12.0625 16.2891C10.9844 16.2891 10.1016 15.8984 9.73438 15.0391C9.45312 14.5391 9.13281 14.3516 8.64844 14.3516C8.03906 14.3516 7.60938 14.7656 7.60938 15.3906C7.60938 15.6016 7.65625 15.8203 7.73438 16.0234C8.1875 17.2578 9.67969 18.1875 12.0078 18.1875Z" fill="#65605C"/><rect x="7" y="12.75" width="10" height="2" rx="1" fill="#EFE0D0"/><rect x="6" y="11.75" width="12" height="2" rx="1" fill="#65605C"/></svg>
            <div class="board__panel-icons-div"></div>
            <svg class="board__panel-icons-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8L19 12L15 16" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8L5 12L9 16" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg class="board__panel-icons-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 8H17" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 12H17" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 16H17" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="8" r="1" fill="#65605C"/><circle cx="7" cy="12" r="1" fill="#65605C"/><circle cx="7" cy="16" r="1" fill="#65605C"/></svg>
            <svg class="board__panel-icons-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 8H17" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 12H17" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 16H17" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.80029 11.061C7.11035 11.061 7.31787 10.8608 7.31787 10.5508V7.99463C7.31787 7.64062 7.09814 7.41602 6.72461 7.41602C6.52441 7.41602 6.34619 7.43555 6.14111 7.57227L5.50146 7.99951C5.36475 8.09229 5.30615 8.20947 5.30615 8.35352C5.30615 8.55859 5.45508 8.70264 5.64795 8.70264C5.74561 8.70264 5.80176 8.68311 5.88965 8.62207L6.26318 8.36328H6.28271V10.5508C6.28271 10.8608 6.49023 11.061 6.80029 11.061Z" fill="#65605C"/><path d="M6.09424 17H8.05225C8.31104 17 8.45752 16.8413 8.45752 16.6094C8.45752 16.3726 8.31104 16.2188 8.05225 16.2188H6.93408V16.1992L7.57617 15.645C8.12305 15.1714 8.36719 14.9248 8.36719 14.4512C8.36719 13.8115 7.82031 13.3794 6.96338 13.3794C6.34814 13.3794 5.85254 13.6406 5.66699 14.0605C5.63525 14.1338 5.62061 14.2095 5.62061 14.29C5.62061 14.5391 5.78174 14.6929 6.04541 14.6929C6.24316 14.6929 6.36768 14.6196 6.50439 14.4194C6.63623 14.229 6.76318 14.1436 6.94873 14.1436C7.2002 14.1436 7.37109 14.2974 7.37109 14.5195C7.37109 14.7295 7.25879 14.8833 6.86328 15.2227L5.89404 16.0527C5.69873 16.2163 5.61084 16.3628 5.61084 16.5532C5.61084 16.812 5.75732 17 6.09424 17Z" fill="#65605C"/></svg>
            <div class="board__panel-icons-div"></div>
            <svg class="board__panel-icons-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7.75781" y="10.5859" width="10" height="8" rx="4" transform="rotate(-45 7.75781 10.5859)" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="3.51562" y="14.8281" width="10" height="8" rx="4" transform="rotate(-45 3.51562 14.8281)" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="7.75766" y="13.4141" width="8" height="4" rx="2" transform="rotate(-45 7.75766 13.4141)" fill="#65605C" stroke="#F2F2F2" stroke-width="2"/></svg>
            <div class="board__panel-icons-div"></div>
            <svg class="board__panel-icons-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.34619 12.313C4.34619 17.0815 7.63965 20.0317 12.334 20.0317C13.4937 20.0317 14.3657 19.9204 14.9409 19.7163C15.4326 19.5308 15.6182 19.2896 15.6182 18.9185C15.6182 18.5288 15.377 18.269 14.8853 18.269C14.7554 18.269 14.6255 18.2783 14.4678 18.3062C13.8555 18.436 13.3452 18.5195 12.6123 18.5195C8.66016 18.5195 6.05322 16.2002 6.05322 12.3594C6.05322 8.60205 8.521 6.0415 12.1948 6.0415C15.5161 6.0415 17.9839 8.11035 17.9839 11.6821C17.9839 13.4355 17.3809 14.6416 16.481 14.6416C15.8965 14.6416 15.5718 14.2705 15.5718 13.6211V9.51123C15.5718 8.88037 15.2192 8.50928 14.6069 8.50928C13.9946 8.50928 13.6421 8.88037 13.6421 9.51123V9.81738H13.5029C13.1318 8.98242 12.3062 8.50928 11.2856 8.50928C9.45801 8.50928 8.19629 10.04 8.19629 12.313C8.19629 14.6509 9.48584 16.2373 11.4062 16.2373C12.4731 16.2373 13.2432 15.7271 13.6328 14.79H13.772C13.9946 15.6992 14.8667 16.228 16.0449 16.228C18.2993 16.228 19.6816 14.3169 19.6816 11.4873C19.6816 7.29395 16.5923 4.5293 12.2041 4.5293C7.56543 4.5293 4.34619 7.64648 4.34619 12.313ZM11.8887 14.5303C10.9053 14.5303 10.3208 13.7231 10.3208 12.3594C10.3208 11.0049 10.9053 10.1978 11.8887 10.1978C12.8813 10.1978 13.5029 11.0234 13.5029 12.3594C13.5029 13.7046 12.8813 14.5303 11.8887 14.5303Z" fill="#65605C"/></svg>
            <svg class="board__panel-icons-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="7" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="9" y="9" width="2" height="4" rx="1" fill="#65605C"/><rect x="13" y="9" width="2" height="4" rx="1" fill="#65605C"/></svg>
            <svg class="board__panel-icons-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 7L16 7C18.7614 7 21 9.23858 21 12V12C21 14.7614 18.7614 17 16 17H9" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 7C4.567 7 3 8.567 3 10.5C3 12.433 4.567 14 6.5 14H13" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 14C14.1046 14 15 13.1046 15 12C15 10.8954 14.1046 10 13 10H9" stroke="#65605C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="board__panel-send"><svg on:click={onMessage} width="42" height="42" style="cursor: pointer;" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9005 20.09C14.3893 20.0389 14 19.6088 14 19.095V14.618C14 13.8747 14.7823 13.3912 15.4472 13.7236L28.2111 20.1056C28.9482 20.4741 28.9482 21.5259 28.2111 21.8944L15.4472 28.2764C14.7823 28.6088 14 28.1253 14 27.382V22.905C14 22.3912 14.3893 21.9611 14.9005 21.91L21.5124 21.2488C21.8126 21.2187 21.8126 20.7813 21.5124 20.7512L14.9005 20.09Z" fill="#65605C"/></svg></div>
    </div>
    {/if}
    <div class="board__resizer" on:click={toggleBoard}></div>
</div>

<style>

.board {
    overflow: hidden;
    position: relative;
    height: 145px;
    min-height: 145px;
    background-color: #F2F2F2;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    transition: .5s;
}
.board__resizer {
    height: 3px;
    background-color: #E0E0E0;
    border: 1px solid #E0E0E0;
    border-radius: 0px 0px 2px 2px;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    cursor: pointer;
}
.board__resizer:hover {
    background-color: #aaa;
    border: 1px solid #aaa;
}
.board__msgText {
    display: block;
    color: #65605C;
    font-size: 14px;
    margin: 16px 16px 0 16px;
    width: calc(100% - 32px);
    height: 62px;
    resize: none;
    border: none;
    background-color: #F2F2F2;
    outline: none;
}
.board__msgText::-webkit-scrollbar { width: 3px; height: 3px;}
.board__msgText::-webkit-scrollbar-button { display: none; background-color: #666; }
.board__msgText::-webkit-scrollbar-track-piece { background-color: #65605C; }
.board__msgText::-webkit-scrollbar-thumb { height: 10px; background-color: #666; border-radius: 2px;}

.board__panel {
    display: block;
    margin: 8px;
    height: 42px;
    display: flex;
    justify-content: space-between;
}
.board__panel-icons {
    height: 42px;
    display: flex;
    align-items: center;
    padding-left: 8px;
}
.board__panel-icons-icon {
    width: 24px;
    height: 24px;
    margin: 0 4px;
    cursor: pointer;
}
.board__panel-icons-div {
    background-color: #F2F2F2;
    width: 2px;
    height: 42px;
    margin: 0 8px;
}

</style>