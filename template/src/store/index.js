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

export default {
  modules: {
    // Add modules here
  },
  state,
  getters,
  actions,
  mutations,
  // Use strict mode in development to show errors when
  // state getters have been manipulated from outside the mutations
  strict: process.env.NODE_ENV === 'development'
}
