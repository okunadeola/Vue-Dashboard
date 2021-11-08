import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      isAuthenticated: false
    }
  },
  mutations: {
    setAuthentication(state) {
      return state.isAuthenticated = true
    }
  },

  actions: {
    setAuthentication(context) {
      context.commit('setAuthentication')
    }

  },
  modules: {
  }
})
