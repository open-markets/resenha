import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import PublisherView from '../views/PublisherView.vue'
import ContentView from '../views/ContentView.vue'
import ContentsView from '../views/ContentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/publisher',
      name: 'publisher',
      component: PublisherView,
    },
    {
      path: '/content',
      name: 'content',
      component: ContentView,
    },
    {
      path: '/contents',
      name: 'contents',
      component: ContentsView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
