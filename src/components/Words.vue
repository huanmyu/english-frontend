<template>
  <div class="words">
    <ul>
      <li v-for="item in items">
         <p>{{ item.name }} {{ item.phonogram }} {{ item.explanation }}</p>
         <p class="example">{{ item.example }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'words',
  data: () => ({
    items: [],
  }),
  created() {
    axios.get('http://127.0.0.1:8000/words')
    .then((response) => {
      this.items = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
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
      text-align: left;
      margin-left: 20%;
      color: #42b983;
      .example {
        margin-left: 2%;
      }
    }
  }
}
</style>
