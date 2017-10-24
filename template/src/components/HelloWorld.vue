<template>
<div class="container">
  <h1>{{ msg }}</h1>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello, World!'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 5em;
  }
}
</style>

