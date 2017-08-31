<template>
  <transition name="slide">
    <music-list :songs="songs" :bgImage="singer.avatar" :title="singer.name"></music-list>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex';
import { OK } from '@api/config';
import { getSingerDetail } from '@api/singer';
import { createSong } from '@assets/js/song';
import MusicList from '@components/music-list/music-list';

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
  },
  components: {
    MusicList
  }

};
</script>
<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
