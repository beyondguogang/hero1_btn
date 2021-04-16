import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
// import shop from '@/components/shop.vue';
Vue.use(VueRouter)
  const routes = [
    {
      path: '/',
      name: '',
      component:login
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
  {
    path: '/home',
    name: 'home',
    component: Home,
    props:true,
//     children:[
//       {
//       path: '/home:pr:project:db:table:change_index:index',
//       name: 'home-pdt',
//       component: shop,
//       props:true,
//       }
//     ]
  },
 {
//      path: '/home/:pr/:project/:db/:table/:change_index/:index',
      path: '/home/:pr/:project/:db/:table',
     name: 'home-pdt',
     component: Home,
     props:true,
     children:[ 
   ]
   },
]
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
};
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
