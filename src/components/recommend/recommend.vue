<template>
  <div class="recommend">
    <div class="slider" :style="{height: sliderH + 'px'}" v-if="sliders.length">
      <swipe :auto="4000">
        <swipe-item class="slider-item" v-for="(item, index) in sliders" :key="index">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="" width="100%" height="100%">
          </a>
        </swipe-item>
      </swipe>
    </div>
  </div>
</template>
<script>
import('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import { getRecommendSliders } from '@api/recommend';

export default {
  data () {
    return {
      sliders: [],
      sliderH: 150
    };
  },
  components: {
    Swipe,
    SwipeItem
  },

  created () {
    this._getRecommendSliders();
    this._setSliderHeight();
  },

  methods: {
    _getRecommendSliders () {
      getRecommendSliders().then((sliders) => {
        this.sliders = sliders;
      });
    },

    // 设置不同设置宽度对应的slider高度
    _setSliderHeight () {
      const sliderW = window.innerWidth;
      const sliderH = Math.round(sliderW * 288 / 720);
      this.sliderH = sliderH;
    }
  }
};
</script>
<style lang="scss" scoped>
.slider {
  width: 100%;
}
</style>

