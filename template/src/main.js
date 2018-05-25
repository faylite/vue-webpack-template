{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
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

/**
 * Vue config
 */
window.Vue = Vue
Vue.config.productionTip = false
{{#store}}
Vue.store = store
{{/store}}

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
