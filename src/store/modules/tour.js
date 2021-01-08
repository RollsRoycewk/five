import { reqCitysList } from "@api/tour";

export default {
    state: {
        citysList: {}
    },
    actions: {
        async getCitysList({ commit }) {
            const citysList = await reqCitysList();
            commit("GET_CITYS_LIST", citysList);
        }
    },
    mutations: {
        GET_CITYS_LIST(state, citysList) {
            state.citysList = citysList.displayWindowModels
        }
    },
    getters: {}
}