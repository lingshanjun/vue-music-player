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
    <div class="sets" v-if="songSets.length">
      <h1 class="title">热门歌单推荐</h1>
      <ul>
        <li class="item" v-for="(item, index) in songSets" :key="index">
          <div class="icon">
            <img v-lazy="item.picUrl" alt="" width="100%">
          </div>
          <div class="text">
            <p class="desc">{{item.songListDesc}}</p>
            <h2 class="author">{{item.songListAuthor}}</h2>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import { OK } from '@api/config';
import { getRecommend } from '@api/recommend';

export default {
  data () {
    return {
      sliders: [],
      songSets: [],
      sliderH: 150
    };
  },
  components: {
    Swipe,
    SwipeItem
  },

  created () {
    this._getRecommend();
    this._setSliderHeight();
  },

  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === OK) {
          this.sliders = res.data.slider;
          this.songSets = res.data.songList;
        }
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
@import '../../common/scss/variable.scss';

.slider {
  width: 100%;
}

.sets {
  .title {
    height: 65px;
    line-height: 65;
    text-align: center;
    font-size: $font-size-medium;
    color: $color-theme;
  }
  .item {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px 20px 20px;
    .icon {
      flex: 0 0 60px;
      width: 60px;
      margin-right: 20px;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      overflow: hidden;
      line-height: 20px;
      font-size: $font-size-medium;
      .desc {
        margin-bottom: 10px;
        color: $color-text;
      }
      .name {
        color: $color-text-d;
      }
    }
  }
}
</style>

