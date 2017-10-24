{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
{{#store}}
import Vuex from 'vuex'
{{/store}}
{{#axios}}
import Axios from 'axios'
{{/axios}}

import App from '@/App'
{{#router}}
import router from '@/router'
{{/router}}
{{#store}}
import store from '@/store'
{{/store}}
{{#store}}

/**
 * Vuex
 */
Vue.use(Vuex)
Vue.store = store
{{/store}}
{{#axios}}

/**
 * Axios HTTP
 */
const http = Axios.create({
  baseURL: '{{ axios_baseURL }}',
  timeout: 1500
})
Vue.prototype.$http = http
Vue.http = http
{{/axios}}

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
