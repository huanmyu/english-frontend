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
import auth from '../auth';

export default {
  name: 'login',
  data: () => ({
    error: '',
    credentials: {
      username: '',
      password: '',
      repeatPassword: '',
      isRemember: true,
    },
  }),
  methods: {
    submit() {
      if (this.credentials.username === '' || this.credentials.password === '' || this.credentials.repeatPassword === '') {
        this.error = 'Please Enter Your username or password';
      } else if (this.credentials.password !== this.credentials.repeatPassword) {
        this.error = 'password not same';
      } else {
        let isRemember = 0;
        if (this.credentials.is_remember === true) {
          isRemember = 1;
        }
        auth.signup(this.credentials.username, this.credentials.password, isRemember);
        this.error = auth.user.error;
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
      margin: 5px;
    }
  }
  .form-check-group {
    padding-right: 6%;
    padding-bottom: 10px;
  }
}
</style>
