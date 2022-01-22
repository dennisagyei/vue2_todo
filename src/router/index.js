import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/About.vue'
import SignUp from '../views/SignUp.vue'
import Team from '../views/Team.vue'
import Projects from '../views/Projects.vue'
import PlantShop from '../views/PlantShop.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/plant',
    name: 'PlantShop',
    component : PlantShop
  }
]

const router = new VueRouter({
  routes
})

export default router
