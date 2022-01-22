import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import About from '../views/About.vue'
import SignUp from '../views/SignUp.vue'
import Team from '../views/Team.vue'
import Projects from '../views/Projects.vue'
import PlantShop from '../views/PlantShop.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/about',
    name: 'About',
    component : About
  },
  {
    path: '/signup',
    name: 'SignUp',
    component : SignUp
  },
  {
    path: '/projects',
    name: 'Projects',
    component : Projects
  },
  {
    path: '/team',
    name: 'Team',
    component : Team
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
