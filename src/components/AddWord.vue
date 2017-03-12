<template>
  <div class="addWord">
    <h2>Add Word</h2>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="wordName"
        v-model="word.name"
      >
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="phonogram"
        v-model="word.phonogram"
      >
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="audio"
        v-model="word.audio"
      >
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="explanation"
        v-model="word.explanation"
      >
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="example"
        v-model="word.example"
      >
    </div>
    <button class="btn btn-primary" @click="submit">Create</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'addWord',
  data: () => ({
    error: '',
    word: {
      name: '',
      phonogram: '',
      audio: '',
      explanation: '',
      example: '',
    },
  }),
  methods: {
    submit() {
      if (this.word.name === '' || this.word.phonogram === '' || this.word.audio === '' || this.word.explanation === '' || this.word.example === '') {
        this.error = 'Please Enter Word name, phonogram, audio, explanation or example';
      } else {
        axios.post('/api/word', {
          name: this.word.name,
          phonogram: this.word.phonogram,
          audio: this.word.audio,
          explanation: this.word.explanation,
          example: this.word.example,
        }).then((response) => {
          if (response.data.id <= 0) {
            this.error = 'created word failed!';
          } else {
            this.$router.push('/words');
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = 'created word failed!';
        });
      }
    },
  },
};
</script>

<style lang="scss">
.addWord {
  .alert-danger {
    color: #ff0000;
  }
  .form-group {
    input {
      width: 200px;
      height: 20px;
      margin-bottom: 10px;
    }
  }
}
</style>
