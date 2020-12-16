<template>
  <div class="hello">
    <h1>Write a new post:</h1>
    <div>
      <div>
      <label for="title">Title</label>
      <input type="text" v-model="post.title" id="title" @blur="validate" />
      </div>
      <div v-if="errors">
      {{ errors.title }}
      </div>

      <div>
      <label for="content">Content</label>
      <input type="text" v-model="post.content" id="content" @blur="validate" />
      </div>
      <div v-if="errors">
      {{ errors.content }}
      </div>
    </div>
    <div>
    <button @click="addPost" data-test="post-btn">Post</button>
    </div>
    <div>
    </div>
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
      post: {
        title: '',
        content: '',
      }
    }
  },
  methods: {
    addPost() {
      if (this.validate()) {
        axios.post('', this.post).then((response) => {
          if (response.data.errors) {
            this.errors = response.data.errors;
          } else {
            this.$emit('update-posts');
            router.push('/');
          }
        });
      }
    },
    validate() {
      let validator = new Validator(this.post, {
        title: 'required|between:1,100',
        content: 'required|min:20'
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
