import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Modules imports
 */
import HelloWorld from './modules/helloWorld'

Vue.use(Vuex)

export default {
  modules: {
    HelloWorld
  },

  // Use strict mode in development to show errors when
  // state getters have been manipulated from outside the mutations
  strict: process.env.NODE_ENV === 'development'
}
