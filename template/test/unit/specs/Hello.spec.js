import Vue from 'vue'
{{#store}}
import Vuex from 'vuex'
{{/store}}
import HelloWorld from '@/components/HelloWorld'
{{#store}}

require('es6-promise').polyfill()
Vue.use(Vuex)
{{/store}}

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    {{#store}}
    const vm = new Constructor({
      store: new Vuex.Store({
        getters: {
          helloWorld: () => 'Welcome to Your Vue.js App'
        }
      })
    }).$mount()
    {{else}}
    const vm = new Constructor().$mount()
    {{/store}}

    expect(
      vm.$el.querySelector('.container p.hello').textContent
    ).to.equal('Welcome to Your Vue.js App')
  })
})
