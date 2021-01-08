import axios from 'axios';

/* 
  首页轮播图
*/
export const getBunnerPic = function (url, data = {}, method = "GET",) {
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
  });
};


/* 
  首页旅游数据
*/
export const getTravelList = function (url, data = {}, method = "GET",) {
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
  });
};


/* 
  首页酒店数据
*/
export const getHotelList = function (url, data = {}, method = "GET",) {
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
  });
};


/* 
  首页飞机数据
*/
export const getHotTicket = function (url, data = {}, method = "GET",) {
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
  });
};



/* 
  首页租车数据
*/
export const getCarList = function (url, data = {}, method = "GET",) {
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
  });
};


/* 
  首页租车数据
*/
export const getLeaveCountry = function (url, data = {}, method = "GET",) {
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
  });
};