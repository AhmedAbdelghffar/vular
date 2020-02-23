import Vue from 'vue'
import Vuex from 'vuex'
import {user} from './modules/user'
import {style} from "./modules/style";
import {helpers} from "./modules/helpers";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    style,
    helpers
  },
})

export default store
