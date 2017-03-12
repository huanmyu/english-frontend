import axios from 'axios';
import router from '../router';

// URL and endpoint constants
const LOGIN_URL = '/api/login';
const ISLOGIN_URL = '/api/isLogin';
const SIGNUP_URL = '/api/user';
const LOGOUT_URL = '/api/logout';

export default {

  // User object will let us check authentication status
  user: {
    error: '',
    authenticated: false,
    username: '',
  },

  // Send a request to the login URL
  login(name, password) {
    axios.post(LOGIN_URL, {
      name,
      password,
    }).then((response) => {
      if (response.data.id <= 0) {
        this.user.error = 'user not found!';
      } else {
        this.user.authenticated = true;
        this.user.username = response.data.name;
        router.push('/home');
      }
    })
    .catch((error) => {
      console.log(error);
      this.user.error = 'user not found!';
    });
  },

  signup(name, password, isRemember) {
    axios.post(SIGNUP_URL, {
      name,
      password,
      is_remember: isRemember,
    }).then((response) => {
      if (response.data.id <= 0) {
        this.error = 'create account failed!';
      } else {
        this.user.authenticated = true;
        this.user.userInfo = response.data;
        router.push('/home');
      }
    })
    .catch((error) => {
      console.log(error);
      this.error = 'create account failed!';
    });
  },

    // Send a request to the login URL
  isLogin() {
    axios.get(ISLOGIN_URL).then((response) => {
      if (response.data.id <= 0) {
        this.user.error = 'user not found!';
      } else {
        this.user.authenticated = true;
        this.user.username = response.data.name;
        router.push('/home');
      }
    })
    .catch((error) => {
      console.log(error);
      this.user.error = 'user not found!';
    });
  },

  // To log out, we just need to remove the token
  logout() {
    axios.get(LOGOUT_URL)
      .then((response) => {
        console.log(response);
        this.user.authenticated = false;
        router.push('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
