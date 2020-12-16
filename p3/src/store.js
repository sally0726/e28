import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
        loggedIn: false,
        username: '',
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        },
        login(state, payload) {
            state.loggedIn = true;
            state.username = payload;
        },
        logout(state, payload) {
            state.loggedIn = false;
            state.username = payload;
        },
    },
    actions: {
        fetchPosts(context) {
            axios.get('').then((response) => {
                context.commit('setPosts', response.data);
            });
        }
    },
    getters: {
        getPostById(state) {
            return function (id) {
                return state.posts.filter((post) => {
                    return post.id == id;
                }, this.id)[0];
            }
        }
    }
})