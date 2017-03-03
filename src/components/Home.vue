<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://github.com/bowenchen6" target="_blank">Github</a></li>
      <li><a href="http://git.oschina.net/bwn" target="_blank">码云</a></li>
      <li><a href="https://twitter.com/Bowen30318500" target="_blank">Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Our English Learn App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
