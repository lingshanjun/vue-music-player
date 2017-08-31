<template>
  <div class="song-list">
    <ul>
      <li class="item" v-for="(song, index) in songs" :key="index">
        <div class="rank" v-show="rank">
          <span class="icon icon0">1</span>
        </div>
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
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
  methods: {
    getDesc (song) {
      return `${song.singer}·${song.album}`;
    }
  }
};
</script>
<style lang="scss">
@import '../../assets/scss/variable.scss';
@import '../../assets/scss/mixin.scss';

.song-list {
  .item {
    display: flex;
    align-items: center;
    height: 64px;
    box-sizing: border-box;
    font-size: $font-size-medium;
  }
  .rank {
    flex: 0 0 25px;
    width: 25px;
    margin-left: 15px;
    text-align: center;
    .icon {
      display: inline-block;
      width: 25px;
      height: 24px;
      background-size: 25px 24px;
      &.icon0 {
        @include bg-image('first');
      }
      &.icon1 {
        @include bg-image('second');
      }
      &.icon2 {
        @include bg-image('third');
      }
    }
    .text {
      color: $color-theme;
      font-size: $font-size-large;
    }
  }
  .content {
    flex: 1;
    margin-left: 20px;
    overflow: hidden;
    line-height: 20px;
    .name {
      @include no-wrap();
      color: $color-text;
    }
    .desc {
      @include no-wrap();
      margin-top: 4px;
      color: $color-text-d;
    }
  }
}
</style>

