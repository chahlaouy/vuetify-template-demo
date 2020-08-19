/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '../pages/layouts/DashboardLayout'
import Dashboard from '../pages/Dashboard';
import Service1 from '../pages/Service1';
import Service2 from '../pages/Service2';
import Service3 from '../pages/Service3';
import Service4 from '../pages/Service4';
import Service5 from '../pages/Service5';

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard',
    component: DashboardLayout,
    children: [
        {
            path: 'dashboard',
            name: 'dashboard',
            component: Dashboard,

        },
        {
            path: 'service-medecine',
            name: 'service-medecine',
            component: Service1,

        },

        {
            path: 'service-radiologie',
            name: 'service-radiologie',
            component: Service2,

        },

        {
            path: 'laboratoire-histopathologie',
            name: 'laboratoire-histopathologie',
            component: Service3,

        },
        {
            path: 'operation-chirurgie',
            name: 'operation-chirurgie',
            component: Service4,

        },
        {
            path: 'service-oncologie',
            name: 'service-oncologie',
            component: Service5,

        }
    ]
  },
  { path: "*", component: Dashboard},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router