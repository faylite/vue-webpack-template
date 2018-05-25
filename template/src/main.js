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
import Router from '@/router'
{{/router}}
{{#store}}
import Store from '@/store'
{{/store}}
import * as Components from '@/components'
import * as Filters from '@/filters'
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

/**
 * Register global components added in the component registry
 *
 * @see {@link ./components/index.js} for component names available
 */
for (let name of Object.keys(Components)) {
  Vue.component(name, Components[name])
}

/**
 * Register global filters added in the filter registry
 *
 * @see {@link ./filters/index.js} for filter names available
 */
for (let name of Object.keys(Filters)) {
  Vue.filter(name, Filters[filter])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router: Router,
  {{/router}}
  {{#store}}
  store: Store,
  {{/store}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
})
