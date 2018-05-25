/**
 * Hello world example module for store
 */
const state = {
  helloWorld: 'Welcome to Your Vue.js App'
}

const getters = {
  message: state => state.helloWorld
}

const actions = {
  setMessage ({ commit }, message) {
    commit('setMessage', message)
  }
}

const mutations = {
  setMessage (state, payload) {
    state.helloWorld = payload
  }
}

export default {
  /**
   * Change this to true if you want to namespace the module
   * In this example the namespace will become 'helloWorld'
   */
  namespaced: false,
  state,
  getters,
  actions,
  mutations
}
