/**
 * Hello world example module for store
 */
const state = {
  helloWorld: 'Welcome to Your Vue.js App'
}

const getters = {
  helloWorld: state.helloWorld
}

const actions = {
  setHelloMessage ({ commit }, message) {
    commit('setHelloMessage', message)
  }
}

const mutations = {
  setHelloMessage (state, payload) {
    state.helloWorld = payload
  }
}