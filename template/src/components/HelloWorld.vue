<template>
<div class="container">
  <img src="../assets/logo.png">
  <p>\{{ msg }}</p>
{{#if_or router store}}
  <h2>Current setup</h2>
  <ul>
{{#router}}
    <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
{{/router}}
{{#store}}
    <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
{{/store}}
  </ul>
{{/if_or}}
  <h2>Essential Links</h2>
  <ul>
    <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
    <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
    <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
    <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    <br>
    <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
  </ul>
  <h2>Ecosystem</h2>
  <ul>
    <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
    <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
  </ul>
</div>
</template>

<script>
export default {
  {{#unless store}}
  data () {
    return {
      msg: 'Hello, World!'
    }
  }
  {{else}}
  computed: {
    msg () {
      return this.$store.getters.helloWorld
    }
  }
  {{/unless}}
}
</script>

<style lang="scss" scoped>
.container {
  padding: 5em;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
}
</style>
