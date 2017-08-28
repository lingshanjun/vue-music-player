import {
  commonParams
} from './config';
import axios from 'axios';

// 获取推荐列表页的数据
export function getRecommend() {
  const url = '/api/recommend';
  const data = Object.assign({}, commonParams);

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data);
  });
}
