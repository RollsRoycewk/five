// import { reqCitysList } from "@api/tour";

import axios from "axios";
export default {
  state: {
    citysList: {},
  },
  actions: {
    getCitysList({ commit }) {
      const citysList = axios
        .get("http://8.129.66.189:8081/getCitysData")
        .then((val) => {
          //   console.log(val.data[0].displayWindowModels);
          commit("GET_CITYS_LIST", val.data[0].displayWindowModels);
        });
    },
  },
  mutations: {
    GET_CITYS_LIST(state, citysList) {
      state.citysList = citysList;
    },
  },
  getters: {},
};
