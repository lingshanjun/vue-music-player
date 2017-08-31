<template>
  <div class="loading">
    <img src="./loading.gif" alt="" width="24" height="24">
    <p class="loading-text">{{title}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
};
</script>
<style lang="scss">
@import '../../assets/scss/variable.scss';

.loading {
  width: 100%;
  text-align: center;
  .loading-text {
    line-height: 20px;
    font-size: $font-size-small;
    color: $color-text-l;
  }
}
</style>


