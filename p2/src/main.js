import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import PostReader from './components/PostReader.vue'
import PostList from './components/PostList.vue'
import PostWriter from './components/PostWriter.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/', component: PostList },
    { path: '/read/:id', component: PostReader, props: true },
    { path: '/post', component: PostWriter },
  ],
  mode: 'history',
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
