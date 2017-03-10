<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="./assets/logo.png" alt="logo">
        </router-link>
        <router-link to="/words" class="words">DailyWordList</router-link>
        <router-link to="/register" class="register">SignUp</router-link>
        <router-link to="/login" class="login">SignIn</router-link>
      </nav>
    </header>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    isLogin: false,
  }),
};
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 15px;
  background-color: lighten(#eceef1, 30%);
  margin: 0;
  padding-top: 55px;
  color: #34495e;
  overflow-y: scroll;
}

#app {
  text-align: center;
  color: #2daf96;
  margin-top: 100px;

  .header {
    background-color: #2f2f2f;
    position: fixed;
    z-index: 999;
    height: 55px;
    top: 0;
    left: 0;
    right: 0;
    .inner {
      max-width: 800px;
      box-sizing: border-box;
      margin: 0px auto;
      padding: 15px 5px;

      .logo {
          width: 24px;
          margin-right: 10px;
          display: inline-block;
          vertical-align: middle;
      }

      a {
        color: rgba(255, 255, 255, .8);
        line-height: 24px;
        transition: color .15s ease;
        display: inline-block;
        vertical-align: middle;
        font-weight: 300;
        letter-spacing: .075em;
        margin-right: 1.8em;
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
        &:nth-child(1){
          margin-right: 10px;
        }  
        &:nth-child(2){
          margin-right: 40%;
        } 
        &:nth-child(3){
          margin-right: 0;
        } 
      }
    }
  }

  .view {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }
}
</style>
