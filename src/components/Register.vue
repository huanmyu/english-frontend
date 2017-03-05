<template>
  <div class="login">
    <h2>Sign Up</h2>
    <p>Sign Up to create your account.</p>
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
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Repeat your password"
        v-model="credentials.repeatPassword"
      >
    </div>
    <div class="form-check-group">
        <input type="checkbox" id="checkbox" v-model="credentials.isRemember">
        <label for="checkbox">IsRemember</label>
    </div>
    <button class="btn btn-primary" @click="submit">SignUp</button>
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
      repeatPassword: '',
      isRemember: '',
    },
  }),
  methods: {
    submit() {
      if (this.credentials.username === '' || this.credentials.password === '' || this.credentials.repeatPassword === '') {
        alert('Please Enter Your username or password');
      } else if (this.credentials.password !== this.credentials.repeatPassword) {
        alert('password not same');
      } else {
        let isRemember = 0;
        if (this.credentials.is_remember === true) {
          isRemember = 1;
        }
        axios.post('http://127.0.0.1:8000/user', {
          name: this.credentials.username,
          password: this.credentials.password,
          is_remember: isRemember,
        }).then((response) => {
          if (response.data.id <= 0) {
            this.error = 'create account failed!';
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
  .form-group {
    input {
      width: 200px;
      height: 20px;
      margin: 5px;
    }
  }
  .form-check-group {
    padding-right: 10%;
    padding-bottom: 10px;
  }
}
</style>
