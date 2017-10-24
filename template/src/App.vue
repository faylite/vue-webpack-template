<template>
  <div id="app">
    {{#router}}
    <router-view />
    {{else}}
    <Home />
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Home from './pages/Home'

{{/unless}}
export default {
  name: 'app'{{#router}}{{else}},

  components: {
    Home
  }{{/router}}
}
</script>

<style lang="scss">
</style>
