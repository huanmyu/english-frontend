<template>
  <div class="login">
    <h2>Sign In</h2>
    <p>Sign in to your account to get more great resources.</p>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your username"
        v-model="credentials.username"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="credentials.password"
      >
    </div>
    <button class="btn btn-primary" @click="submit">SignIn</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login',
  data: () => ({
    error: '',
    credentials: {
      username: '',
      password: '',
    },
  }),
  methods: {
    submit() {
      if (this.credentials.username === '' || this.credentials.password === '') {
        this.error = 'Please Enter Your username or password';
      } else {
        axios.post('/api/login', {
          name: this.credentials.username,
          password: this.credentials.password,
        }).then((response) => {
          if (response.data.id <= 0) {
            this.error = 'user not found!';
          } else {
            this.$router.push('/');
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
  },
};
</script>

<style lang="scss">
.login {
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
