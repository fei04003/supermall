import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Me = () => import('views/me/Me')

const routes = [
  {
    path: '',
    redirect: '/home'  //重定向 
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
   {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
   {
    path: '/category',
    name: 'category',
    component: Category
  },
   {
    path: '/me',
    name: 'me',
    component: Me
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
