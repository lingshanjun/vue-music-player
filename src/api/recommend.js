import {
  commonParams
} from './config';
import axios from 'axios';

export function getRecommendSliders() {
  const url = '/api/recommend/sliders';
  const data = Object.assign({}, commonParams);

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data.data.slider);
  });
}
