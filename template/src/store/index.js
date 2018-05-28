import Vue from 'vue'
import Vuex from 'vuex'
import * as Modules from '@/store/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  /**
   * Add all modules provided by the module registry
   *
   * @see {@link ./modules/index.js}
   */
  modules: Modules,

  // Use strict mode in development to show errors when
  // state getters have been manipulated from outside the mutations
  strict: process.env.NODE_ENV === 'development'
})
