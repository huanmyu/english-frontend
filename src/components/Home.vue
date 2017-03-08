<template>
  <div class="home">
    <img src="../assets/logo.png">
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
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to ourself english learn app',
      isLogin: false,
    };
  },
  created() {
    axios.get('http://127.0.0.1:8000/isLogin')
    .then((response) => {
      console.log(response.data);
      if (response.data.id > 0) {
        this.isLogin = true;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 10px;
      a {
        color: #42b983;
      }
    }
  }
}
</style>
