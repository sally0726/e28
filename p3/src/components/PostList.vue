<template>
  <div class="hello">
    <div v-if="loggedIn">
      <p>Welcome, {{ username }}!</p>
      <button @click="logout">Log out</button>
    </div>
    <div v-else>
      <router-link
        :to="'/login'"
        tag="button"
        exact
      >
        Login
      </router-link>
      <router-link
        :to="'/register'"
        tag="button"
        exact
      >
        Register
      </router-link>
    </div>
    <h1>All Posts:</h1>
    <router-link
      :to="'/post'"
      tag="button"
      exact
    >
      New Post
    </router-link>
    <hr>
    <ul>
      <li v-for="(post, index) in posts" v-bind:key="index">
        <router-link
          v-bind:to="'/read/' + index"
          exact
        >
          <h3 data-test="post-title">Title: {{ post.title }}</h3>
        </router-link>
        <p>Pub Date: {{ post.pub_date }}</p>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: ['posts'],
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    username() {
      return this.$store.state.username;
    }
  },
  methods: {
    logout() {
      this.$store.commit('logout', '');
    }
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
