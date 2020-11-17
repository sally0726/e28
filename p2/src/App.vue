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
import { axios } from '@/app.js'

export default {
  name: 'App',
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    updatePosts() {
      axios.get('').then((response) => {
        this.posts = response.data;
      })
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
