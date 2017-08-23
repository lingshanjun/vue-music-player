<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <m-header></m-header>
  </div>
</template>

<script>
import MHeader from '@components/m-header/m-header';

export default {
  name: 'app',
  components: {
    MHeader
  }
};
</script>

<style lang='scss' scoped>

</style>
