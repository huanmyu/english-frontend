<template>
  <div id="app">
    <div class="nav">
      <div class="link">
        <router-link to="/home" exact>
          <img class="logo" src="./assets/logo.png" alt="logo">
        </router-link>
        <router-link to="/words" class="words">DailyWordList</router-link>
        <router-link to="/addWord" class="add" v-if="user.authenticated">AddDailyWord</router-link>
      </div>
      <div class="authLogin">
          <router-link to="/register" class="register" v-if="!user.authenticated">SignUp</router-link>
          <router-link to="/login" class="login"  v-if="!user.authenticated">SignIn</router-link>
          <span v-if="user.authenticated">{{ user.username }}</span>
          <a class="logout" v-if="user.authenticated" @click="logout">Logout</a>
      </div>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import auth from './auth';

export default {
  name: 'app',
  data() {
    return {
      user: auth.user,
    };
  },
  created() {
    auth.isLogin();
  },
  methods: {
    logout() {
      auth.logout();
    },
  },
};
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 15px;
  background-color: lighten(#eceef1, 30%);
  margin: 0;
  color: #34495e;
  overflow-y: scroll;
}

#app {
  width: 100%;
  text-align: center;
  color: #2daf96;
  .nav{
    width: 100%;
    padding-bottom: 100px;
    height: 55px;
    .link {
      width: 60%;
      line-height: 55px;
      background-color: #2f2f2f;
      float: left;
      .logo {
          width: 24px;
          margin-right: 10px;
          display: inline-block;
          vertical-align: middle;
      }

      .words {
        margin-right: 10px;
      }
    }

    .authLogin {
      width: 40%;
      line-height: 55px;
      background-color: #2f2f2f;
      float: left;
    }
    
    a {
      color: rgba(255, 255, 255, .8);
      transition: color .15s ease;
      display: inline-block;
      font-weight: 300;
      &:link {
        text-decoration: none;
      }
      &:hover {
        color: #fff;
      }
      &.router-link-active {
        color: #fff;
        font-weight: 400;
      }
    }

  }

  .view {
    margin: 0 auto;
    position: relative;
  }
}
</style>
