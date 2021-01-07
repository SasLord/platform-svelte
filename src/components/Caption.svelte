<script>
    export let title = '# title';
    export let theme = 'Transperent';
</script>

<div class="container bb_{theme}">
    <p class="title t_{theme}">{title}</p>
    <div class="members">
        <img class="avatar b_{theme}" src="https://platform.exhale24.ru/images/photo-4.png" alt="">
        <img class="avatar b_{theme}" src="https://platform.exhale24.ru/images/photo-3.png" alt="">
        <img class="avatar b_{theme}" src="https://platform.exhale24.ru/images/photo-1.png" alt="">
        <span class="members-counter b_{theme}">15</span>
        <svg class="members-btn" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="8" fill="#CCCCCC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 4H7V7H4V9H7V12H9V9H12V7H9V4Z" fill="white"/></svg>
    </div>
</div>

<style>
.container {
    box-sizing: border-box;
    height: 72px;
    padding: 24px 32px;
    border-bottom: 1px solid #E1E1E1;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bb_Transperent { background-color: transparent; border-bottom: 1px solid #E1E1E1; }
.bb_Biege { background-color: #FDF1E6; border-bottom: 1px solid #EFE0D0; }
.bb_Black { background-color: #1E1E1E; border-bottom: 1px solid #333; }

.members {
    display: flex;
    align-items: center;
}
.members-btn {
    margin-left: 6px;
}
.members-counter {
    font-family: 'Inter', sans-serif;
    display: inline-block;
    color: #fff;
    background-color: #235594;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
    border: 2px solid #fff;
    height: 16px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 12px;
}
.avatar {
    border: 2px solid #fff;
    border-radius: 50%;
    width: 24px; height: 24px;
    margin-right: -6px;
}
.b_Transperent { background-color: #235594; border: 2px solid #fff; }
.b_Biege { background-color: #235594; border: 2px solid #FDF1E6; }
.b_Black { background-color: #5A92D8; border: 2px solid #1E1E1E; }

.title {
    color: #000;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
}
.t_Transperent { color: #000; }
.t_Biege { color: #000; }
.t_Black { color: #fff; }

</style>