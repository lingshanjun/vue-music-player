<template>
  <div class="singer">
    <list-view :groups="groups"></list-view>
  </div>
</template>
<script>
import _ from 'lodash';
import { getSingerList } from '@api/singer';
import { OK } from '@api/config';
import ListView from '@base/list-view';
import Singer from '@common/js/singer';

const HOT_SINGER_LEN = 10;
const HOT_NAME = '热门';
const OTHER_NAME = '其它';

export default {
  data () {
    return {
      groups: []
    };
  },
  components: {
    ListView
  },

  created () {
    this._getSingerList();
  },

  methods: {
    _getSingerList () {
      getSingerList().then(res => {
        if (res.code === OK) {
          this.groups = this._normalizeSinger(res.data.list);
        }
      });
    },
    _normalizeSinger (list) {
      // 按首字母分组
      let result = _.groupBy(list, 'Findex');

      // 添加热门组
      result[HOT_NAME] = list.slice(0, HOT_SINGER_LEN);

      // 生成新的数据结构
      let map = Object.entries(result).map(([key, items]) => {
        key = key === '9' ? OTHER_NAME : key;
        items = items.map((item) => {
          return new Singer(item.Fsinger_mid, item.Fsinger_name);
        });
        return {
          title: key,
          items: items
        };
      });

      // 按分类排序
      map = _.orderBy(map, ['title']);
      // 调整热门组的位置
      map.unshift(map.pop());
      return map;
    }
  }
};
</script>
<style lang="scss" scoped>

</style>

