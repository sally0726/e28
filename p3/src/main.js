import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import PostReader from './components/PostReader.vue'
import PostList from './components/PostList.vue'
import PostWriter from './components/PostWriter.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Denied from './components/denied.vue'
import store from './store.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/', component: PostList },
    { path: '/read/:id', component: PostReader, props: true, meta: {requiresAuth: true} },
    { path: '/post', component: PostWriter, meta: {requiresAuth: true} },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/denied', component: Denied },
  ],
  mode: 'history',
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !store.state.loggedIn) {
    next('/denied');
  } else {
    next();
  }
});


new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
