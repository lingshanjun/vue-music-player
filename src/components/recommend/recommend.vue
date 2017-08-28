<template>
  <div>
    recommend
  </div>
</template>
<script>
import { getRecommendSliders } from '@api/recommend';

export default {
  data () {
    return {

    };
  },

  created () {
    this._getRecommendSliders();
  },

  methods: {
    _getRecommendSliders () {
      getRecommendSliders().then((res) => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="scss" scoped>

</style>

