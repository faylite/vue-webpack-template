{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from '@/App'
{{#router}}
import router from '@/router'
{{/router}}
{{#store}}

/**
 * Vuex
 */
import Vuex from 'vuex'
import store from '@/store'
Vue.use(Vuex)
Vue.store = store

{{/store}}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#store}}
  store,
  {{/store}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
})
