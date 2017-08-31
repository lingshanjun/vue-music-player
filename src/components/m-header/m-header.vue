<template>
    <div class="m-header">
        <div class="logo"></div>
        <h1 class="title">天天音乐</h1>
        <div class="mine">
            <i class="icon-mine"></i>
        </div>
    </div>
</template>
<script>
export default {

};
</script>
<style lang="scss">
@import '../../assets/scss/variable.scss';
@import '../../assets/scss/mixin.scss';

.m-header {
    position: relative;
    height: 44px;
    text-align: center;
    font-size: 0;
    color: $color-theme;
    .logo {
        display: inline-block;
        width: 32px;
        height: 32px;
        margin-top: 6px;
        margin-right: 9px;
        @include bg-image('logo');
        background-size: 32px 32px;
    }
    .title {
        display: inline-block;
        line-height: 44px;
        vertical-align: top;
        font-size: $font-size-large;
    }
    .mine {
        position: absolute;
        top: 0;
        right: 0;
        .icon-mine {
            display: block;
            padding: 12px;
            font-size: 20px;
            color: $color-theme;
        }
    }
}
</style>
