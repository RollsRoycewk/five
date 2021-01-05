import axios from 'axios';


export default function (url, data = {}, method = "GET",) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      data
    })
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
    // axios.get('http://8.129.66.189:8081/test').then((result) => {
    //   resolve(result);
    // });
  });
}