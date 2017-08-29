/**
 * jsonp 封装应用
 * by lwj
 */
import originJsonp from 'jsonp';

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, res) => {
      if (!err) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  });
}

function param(data) {
  let str = '';
  for (var k in data) {
    let value = data[k] || '';
    str += '&' + k + '=' + encodeURIComponent(value);
  }
  return str ? str.substring(1) : '';
}
