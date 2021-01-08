import request from "@utils/request";

export const resCityList = (city) => {
  return request({
    url: `/${city}`,
    method: "GET",
  });
};
export const navCityList = () => {
  return request({
    url: `/cityList`,
    method: "GET",
  });
};
export const resInpAllCity = () => {
  return request({
    url: `/allCity`,
    method: "GET",
  });
};
export const resRmCity = () => {
  return request({
    url: `/rmCity`,
    method: "GET",
  });
};
export const resABCDCity = () => {
  return request({
    url: `/abcd`,
    method: "GET",
  });
};
export const resBjDelicacyCity = (city = "bjDelicacyCity") => {
  return request({
    url: `/${city}`,
    method: "GET",
  });
};
export const swiperItem = (id) => {
  console.log(id);
  return request({
    url: `/${id}`,
    method: "GET",
  });
};
export const addHistory = (data) => {
  return request({
    url: `/historyCityList`,
    method: "POST",
    data,
  });
};
