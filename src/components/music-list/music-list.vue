<template>
  <div class="music-list">
    <div class="back" @click="goBack">
      <i class="icon-back"></i>
    </div>
    <h1 class="title">{{title}}</h1>

    <div class="bg-image" ref="bgImage" :style="{'backgroundImage': 'url('+bgImage+')'}">
      <div class="play-wrapper">
        <div class="play" ref="playBtn">
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
      <div class="filter" ref="filter"></div>
    </div>
    <div class="bg-layer" ref="layer"></div>

    <scroll class="list" ref="list" :data="songs" :probe-type="3" :listen-scroll="true" @scroll="scroll">
      <div class="song-list-wrapper">
        <song-list :songs="songs" @selectItem="selectItem"></song-list>
      </div>
      <div class="loading-wrapper" v-show="!songs.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import Scroll from '@basecomponents/scroll/scroll';
import SongList from '@basecomponents/song-list/song-list';
import Loading from '@basecomponents/loading/loading';
import { prefixStyle } from '@assets/js/dom';

const RESERVED_HEIGHT = 40; // 预留高度--标题的高度
const transform = prefixStyle('transform');
const backdrop = prefixStyle('backdrop-filter');

export default {
  props: {
    bgImage: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    songs: {
      type: Array,
      default: () => {
        return [];
      }
    },
    rank: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scrollY: 0
    };
  },
  mounted () {
    this.imageHeight = this.$refs.bgImage.clientHeight;
    this.$refs.list.$el.style.top = `${this.imageHeight}px`;

    this.minTranslateY = -this.imageHeight + RESERVED_HEIGHT;
  },
  methods: {
    goBack () {
      this.$router.back();
    },
    scroll (pos) {
      this.scrollY = pos.y;
    },
    selectItem (song, index) {
      this.selectPlay({
        list: this.songs,
        index
      });
    },
    ...mapActions([
      'selectPlay'
    ])
  },
  watch: {
    scrollY (newVal) {
      let translateY = Math.max(this.minTranslateY, newVal);
      let scale = 1;
      let zIndex = 0;
      let blur = 0;
      const percent = Math.abs(newVal / this.minTranslateY);

      if (newVal > 0) {
        scale = 1 + percent;
        zIndex = 10;
      } else {
        blur = Math.min(20, percent * 20);
      }

      this.$refs.layer.style[transform] = `translate3d(0,${translateY}px,0)`;
      this.$refs.filter.style[backdrop] = `blur(${blur}px)`;

      if (newVal < this.minTransalteY) {
        zIndex = 10;
        this.$refs.bgImage.style.paddingTop = 0;
        this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`;
        this.$refs.playBtn.style.display = 'none';
      } else {
        this.$refs.bgImage.style.paddingTop = '70%';
        this.$refs.bgImage.style.height = 0;
        this.$refs.playBtn.style.display = '';
      }
      this.$refs.bgImage.style[transform] = `scale(${scale})`;
      this.$refs.bgImage.style.zIndex = zIndex;
    }
  },
  components: {
    Scroll,
    SongList,
    Loading
  }
};
</script>
<style lang="scss">
@import '../../assets/scss/variable.scss';
@import '../../assets/scss/mixin.scss';

.music-list {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  background: $color-background;
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 100;
    .icon-back {
      display: block;
      padding: 10px;
      font-size: $font-size-large-x;
      color: $color-theme;
    }
  }
  .title {
    position: absolute;
    top: 0;
    left: 10%;
    z-index: 99;
    width: 80%;
    @include no-wrap();
    text-align: center;
    line-height: 40px;
    font-size: $font-size-large;
    color: $color-text;
  }
  .bg-image {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 70%;
    background-size: cover;
    transform-origin: top;
    .filter {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(7, 17, 27, 0.4);
    }
    .play-wrapper {
      position: absolute;
      bottom: 20px;
      left: 0;
      width: 100%;
      z-index: 13;
      .play {
        width: 135px;
        margin: 0 auto;
        padding: 7px 0;
        box-sizing: border-box;
        text-align: center;
        border: 1px solid $color-theme;
        color: $color-theme;
        border-radius: 100px;
        font-size: 0;
        .icon-play {
          display: inline-block;
          vertical-align: middle;
          margin-right: 6px;
          font-size: $font-size-medium-x;
        }
        .text {
          display: inline-block;
          vertical-align: middle;
          font-size: $font-size-small;
        }
      }
    }
  }
  .bg-layer {
    position: relative;
    height: 100%;
    background: $color-background;
  }
  .list {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 14;
    background-color: $color-background;
    .song-list-wrapper {
      padding: 20px 30px;
    }
    .loading-wrapper {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>

