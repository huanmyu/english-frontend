<template>
  <div class="words">
  </div>
</template>

<script>
export default {
  name: 'words',
  data() {
    return {
      msg: 'Welcome to Our Day Words',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.words {
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
