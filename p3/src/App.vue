<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view
      v-bind:posts="posts"
      v-on:update-posts="updatePosts()"
    ></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  // data() {
  //   return {
  //     posts: [],
  //   }
  // },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    updatePosts() {
      // axios.get('').then((response) => {
      //   this.posts = response.data;
      // })
      this.$store.dispatch('fetchPosts');
    }
  },
  mounted() {
    this.updatePosts();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
