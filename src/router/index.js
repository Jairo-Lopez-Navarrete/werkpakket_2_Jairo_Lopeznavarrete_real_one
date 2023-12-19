import {createRouter, createWebHistory} from 'vue-router'

import DetailPaginaView from "@/views/DetailPaginaView.vue";
import LoginView from "@/views/LoginView.vue";
import OverzichtsPaginaView from "@/views/OverzichtsPaginaView.vue";
import HomeView from "@/views/HomeView.vue";
import ShoppingView from '@/views/ShoppingView.vue';
import CheckOutView from '@/views/CheckOutView.vue';
import BevestigingsPaginaView from '@/views/BevestigingsPaginaView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/detail/:id',
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
    },
    {
      path: '/checkout',
      name: 'CheckOut',
      component: CheckOutView
    },
    {
      path: '/bevestiging',
      name: 'Bevestigingspagina',
      component: BevestigingsPaginaView
    }
  ]
})

export default router