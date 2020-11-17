<template>
  <div class="hello">
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
          <h3>Title: {{ post.title }}</h3>
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
