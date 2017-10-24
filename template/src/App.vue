<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{else}}
    <Home/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Home from './pages/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    Home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="scss">
</style>
