<template>
  <div class="listview">
    <ul class="list">
      <li class="list-group" v-for="(group, index) in groups" :key="index">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li class="list-group-item" v-for="(item, key) in group.items" :key="key">
            <img class="avatar" :src="item.avatar" alt="">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="indexes">
      <li class="indexes-item" v-for="(value, index) in indexes" :key="index" :class="{'active': curIndex===index}">
        {{value}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    groups: {
      type: Array,
      default: []
    }
  },

  data () {
    return {
      curIndex: 0
    };
  },

  computed: {
    indexes () {
      return this.groups.map((group) => {
        return group.title.substr(0, 1);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';

.listview {
  // position: relative;
  background: $color-background;
  .list-group {
    padding-bottom: 30px;
    .list-group-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
    .list-group-item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        margin-left: 20px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
    }
  }
  .indexes {
    position: fixed;
    right: 10px;
    top: 60%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: $color-background-d;
    font-family: Helvetica;
    .indexes-item {
      padding: 3px;
      line-height: 1;
      color: $color-text-l;
      font-size: $font-size-small;
      &.active {
        color: $color-theme;
      }
    }
  }
}
</style>

