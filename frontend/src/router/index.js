import { createRouter, createWebHistory } from 'vue-router';
import Email from '../components/email.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Email
    }
  ]
});

export default router;
