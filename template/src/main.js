// The Vue build version to load with the `import` command
// has been set in webpack.base.conf with an alias.
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
{{#eventhub}}

/**
 * Eventhub for passing global events into it's own scope so all components can listen for the events.
 * Note that it's REALLY important to reference function instead of using arrow functions,
 * when you do $off('event-name') ALL LISTENERS WILL BE TURNED OFF GLOBALLY FOR THAT EVENT,
 * potentially removing other listeners for other components.
 * If you do $off('event-name', functionReference) only the explicit listener will be removed from the listeners.
 *
 * Example usage in components:
 * $eventHub.$emit('event-name', payload)
 * $eventHub.$on('event-name', functionReference)
 * $eventHub.$off('event-name', functionReference)
 */
const EventHub = new Vue()
Vue.eventHub = EventHub
Vue.prototype.$eventHub = EventHub
{{/eventhub}}

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
  template: '<App/>',
  components: { App }
})
