/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '../pages/layouts/DashboardLayout'
import Dashboard from '../pages/Dashboard';
import Service1 from '../pages/Service1';
import Service2 from '../pages/Service2';
import Service3 from '../pages/Service3';
import Service4 from '../pages/Service4';

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
            path: 'service-1',
            name: 'service-1',
            component: Service1,

        },

        {
            path: 'service-2',
            name: 'service-2',
            component: Service2,

        },

        {
            path: 'service-3',
            name: 'service-3',
            component: Service3,

        },
        {
            path: 'service-4',
            name: 'service-4',
            component: Service4,

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