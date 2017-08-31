<template>
  <div class="player" v-show="playList.length">
    <div class="normal-player" v-show="fullScreen">
      normal-player
    </div>
    <div class="mini-player" v-show="!fullScreen">
      mini-player
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'playList',
      'fullScreen'
    ])
  }
};
</script>
<style lang="scss">
@import '../../assets/scss/variable.scss';
@import '../../assets/scss/mixin.scss';

.player {
  .normal-player {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 150;
    background-color: $color-background;
  }
  .mini-player {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    z-index: 180;
    background-color: $color-highlight-background;
  }
}
</style>

