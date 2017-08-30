<template>
  <transition name="slide">
    <div class="singer-detail">
      singer detail</div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex';
import { OK } from '@api/config';
import { getSingerDetail } from '@api/singer';
import { createSong } from '@assets/js/song';

export default {
  data () {
    return {
      songs: []
    };
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created () {
    this._getSingerDetail();
  },
  methods: {
    _getSingerDetail () {
      if (!this.singer.id) {
        this.$router.push('/singer');
        return false;
      }
      getSingerDetail(this.singer.id).then(res => {
        if (res.code === OK) {
          this.songs = this._normalizeSongs(res.data.list);
          console.log(this.songs);
        }
      });
    },
    _normalizeSongs (list) {
      let ret = [];
      list.forEach(item => {
        let { musicData } = item;
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData));
        }
      });
      return ret;
    }
  }

};
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variable.scss';

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}

.singer-detail {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background: $color-background;
}
</style>


