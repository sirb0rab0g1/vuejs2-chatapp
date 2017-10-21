import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Live from '@/components/Live'
import Friendslist from '@/components/Friendslist'
import Message from '@/components/Message'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Live',
      name: 'Live',
      component: Live
    },
    {
      path: '/Friendslist',
      name: 'Friendslist',
      component: Friendslist
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    }
  ]
})
