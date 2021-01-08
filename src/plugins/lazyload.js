import Vue from "vue"
import VueLazyload from 'vue-lazyload'

import loading from "./images/loading.gif"

Vue.use(VueLazyload,{
    loading: loading,
});
