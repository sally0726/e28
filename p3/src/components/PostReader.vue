<template>
  <div class="hello">
    <h3 data-test="post-title">{{ post.title }}</h3>
    <p data-test="post-content">{{ post.content }}</p>
    <p data-test="post-date">{{ post.pub_date }}</p>
    <router-link v-bind:to="'/'" tag="button">Back</router-link>
  </div>
</template>

<script>

export default {
  name: '',
  props: ['id', 'posts'],
  computed: {
    post() {
      return this.posts[this.id];
    }
  }
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
