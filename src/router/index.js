import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import CareerView from '@/views/CareerView.vue'
import ApplyNowView from '@/views/ApplyNowView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
// import FAQsView from '@/views/FAQsView.vue'
import Test from '@/views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactView
  },
  {
    path: '/career',
    name: 'career',
    component: CareerView
  },
  {
    path: '/apply',
    name: 'apply',
    component: ApplyNowView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  // {
  //   path: '/faqs',
  //   name: 'faqs',
  //   component: FAQsView
  // }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
