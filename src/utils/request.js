import axios from "axios";

// const instance = axios.create({
//   baseURL: "/api",
// });

// instance.interceptors.request.use((config) => {
//   return config;
// });

// instance.interceptors.response.use(
//   (response) => {
//     // if (response.data.code === 200) {
//     //     // 返回成功的响应数据
//     //     return response
//     // }
//     return response.data;
//     //return Promise.reject();
//   },
//   (error) => {
//     const message = error.message || "网络错误";
//     // 提示错误
//     return Promise.reject(message);
//   }
// );
// export default instance;

import { Message } from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// 通过其值来区分运行环境
// console.log(process.env.NODE_ENV); // development  production
// const prefix_url =
//   process.env.NODE_ENV === "development" ? "/" : "http://182.92.128.115/";
const instance = axios.create({
  //  / 就是当前服务器地址
  baseURL: `http://localhost:3001`, // 公共的基础路径
  headers: {
    // token: 'xxx' // 不行，登录接口不需要
  },
});
instance.interceptors.request.use(
  (config) => {
    // config 请求的配置对象
    // 将来发送请求（请求地址，请求参数，请求方式等）都会在config中找

    // 开始进度条
    NProgress.start();

    return config;
  }
  // 初始化Promise.resolve()返回默认成功的Promise，只会触发成功的回调
  // () => {},
);
instance.interceptors.response.use(
  // 响应成功：当响应状态码为 2xx
  (response) => {
    /*
      响应成功不能代表功能成功，只是代表有响应结果
        功能成功是否成功看 code
          成功：200
          失败：201 202

      返回一个具体为
        成功：成功的数据
        失败：失败的原因
      的结果

      response的数据结构：
        {
          headers: {},
          status: {},
          request: {},
          data: { // 响应的数据
            code: 200,
            message: "成功",
            data:{
              nickName:"Administrator",
              name:"Admin",
              token: 90aa16f24d04c7d882051412f9ec45b"
            },
            ok: true
          }
        }
    */
    // 进度条结束
    NProgress.done();

    // 判断响应的code是否是200

    // 返回成功的响应数据
    return response.data;
  },
  // 响应失败：当响应状态码不是 2xx
  (error) => {
    // console.dir(error);
    // 进度条结束
    NProgress.done();
    const message = error.message || "网络错误";
    // 提示错误
    Message.error(message);
    return Promise.reject(message);
  }
);

export default instance;
