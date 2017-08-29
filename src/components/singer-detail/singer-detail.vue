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

export default {
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
          console.log(res.data);
        }
      });
    }
  }

};
</script>
<style lang="scss" scoped>
@import '../../common/scss/variable.scss';

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


