import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Requests from '../views/Requests.vue'
import ReturnNotes from '../views/ReturnNotes.vue'
import PaymentHistory from '../views/PaymentHistory.vue'
import Information from '../views/Information.vue'
import Protocol from '../views/Protocol.vue'
import AppLayout from '../views/AppLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/requests',
        name: 'Requests',
        component: Requests
      },
      {
        path: '/return-notes',
        name: 'ReturnNotes',
        component: ReturnNotes
      },
      {
        path: '/payment-history',
        name: 'PaymentHistory',
        component: PaymentHistory
      },
      {
        path: '/information',
        name: 'Information',
        component: Information
      },
      {
        path: '/protocol/:id',
        name: 'Protocol',
        component: Protocol
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
