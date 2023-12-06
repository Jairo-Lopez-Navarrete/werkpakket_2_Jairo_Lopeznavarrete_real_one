import {createRouter, createWebHistory} from 'vue-router'

import DetailPaginaView from "@/views/DetailPaginaView.vue";
import LoginView from "@/views/LoginView.vue";
import OverzichtsPaginaView from "@/views/OverzichtsPaginaView.vue";
import HomeView from "@/views/HomeView.vue";
import ShoppingView from '@/views/ShoppingView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/detail',
      name: 'Detail',
      component: DetailPaginaView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: ShoppingView
    },
    {
      path: '/overzicht',
      name: 'Overzicht',
      component: OverzichtsPaginaView
    }
  ]
})

export default router
