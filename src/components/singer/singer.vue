<template>
  <div>
    singer
  </div>
</template>
<script>
import { getSingerList } from '@api/singer';
export default {
  created () {
    this._getSingerList();
  },
  methods: {
    _getSingerList () {
      getSingerList().then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="scss" scoped>

</style>

