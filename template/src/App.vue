<template>
  <div id="app">
    {{#router}}
    <router-view />
    {{else}}
    <hello-world />
    {{/router}}
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
