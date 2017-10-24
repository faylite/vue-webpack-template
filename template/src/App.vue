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
{{#unless router}}
import HelloWorld from '@/components/HelloWorld'

{{/unless}}
export default {
  name: 'app'{{#router}}{{else}},

  components: {
    HelloWorld
  }{{/router}}
}
</script>
