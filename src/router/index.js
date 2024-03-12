import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title : "Login"
      }
    },


    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: {
        title : "Signup"
      }
    },

    
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title : "Home"
      }
    },
    {
      path: '/weather/:state/:city',
      name: 'cityView',
      component: CityView,
      meta: {
        title : "Weather"
      }
    },
  ]
})

router.beforeEach((to,from,next) => {
  document.title = `${to.params.state ? `${to.params.city}, ${to.params.state}`:to.meta.title} | The Local Weather`;
  next();
})

export default router
