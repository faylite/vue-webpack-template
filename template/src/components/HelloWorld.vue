<template>
<div class="container">
  <img src="../assets/logo.png">
  <p>\{{ msg }}</p>
  <h2>Current setup</h2>
  <ul>
    <li v-for="(entry, index) in installed" :key="index">
      <a :href="entry.link">\{{ entry.name }}</a>
    </li>
  </ul>
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
  data () {
    return {
      installed: [
        {{#router}}
        { name: 'vue-router', link: 'http://router.vuejs.org/' },
        {{/router}}
        {{#store}}
        { name: 'vuex', link: 'http://vuex.vuejs.org/' },
        {{/store}}
        {{#axios}}
        { name: 'axios', link: 'https://github.com/axios/axios' },
        {{/axios}}
        { name: 'vue', link: 'https://vuejs.org/' }
      ]
    }
  },

  computed: {
    msg () {
      {{#store}}
      return this.$store.getters.helloWorld
      {{else}}
      return 'Hello, World!'
      {{/store}}
    }
  }
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
