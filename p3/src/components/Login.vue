<template>
  <div class="hello">
    <h1>Login :</h1>
    <div>
      <div>
      <label for="username">Username</label>
      <input type="text" v-model="user.username" id="username" @blur="validate" />
      </div>
      <div v-if="errors">
      {{ errors.username }}
      </div>

      <div>
      <label for="passworrd">Password</label>
      <input type="password" v-model="user.password" id="password" @blur="validate" />
      </div>
      <div v-if="errors">
      {{ errors.password }}
      </div>

    </div>
    <button @click="login" id='login-btn' >Login</button>
    <p>New to this website?</p>
    <router-link
      :to="'/register'"
      tag="button"
      exact
    >
      Register
    </router-link>
  </div>
</template>

<script>
import { axios } from '@/app.js';
import { router }  from '@/main.js';
import Validator from 'validatorjs';

export default {
  data() {
    return {
      errors: null,
      user: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      if (this.validate()) {
        axios.post('/login', this.user).then((response) => {
          if (response.data.errors) {
            this.errors = response.data.errors;
          } else {
            this.$store.commit('login', response.data.username);
            router.push('/');
          }
        });
      }
    },
    validate() {
      let validator = new Validator(this.user, {
        username: 'required|between:1,20',
        password: 'required|min:8'
      });
      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }
      return validator.passes();
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
