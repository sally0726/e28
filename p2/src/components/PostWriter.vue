<template>
  <div class="hello">
    <h1>Write a new post:</h1>
    <div>
      <label for="title">Title</label>
      <input type="text" v-model="post.title" id="title" />

      <label for="content">Content</label>
      <input type="text" v-model="post.content" id="content" />
    </div>
    <button @click="addPost">Post</button>
    {{ errors }}
  </div>
</template>

<script>
import { axios } from '@/app.js';
import { router }  from '@/main.js';

export default {
  data() {
    return {
      errors: null,
      post: {
        title: '',
        content: '',
      }
    }
  },
  methods: {
    addPost() {
      axios.post('', this.post).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$emit('update-posts');
          router.push('/');
        }
      });
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
