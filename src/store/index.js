import Vue from 'vue'
import Vuex from 'vuex'
import requests from './modules/requests'
import returnnotes from './modules/returnnotes'
import paymenthistory from './modules/paymenthistory'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    requests,
    returnnotes,
    paymenthistory
  }
})
