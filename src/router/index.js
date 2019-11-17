import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Player from 'pages/Player'
import Login from 'pages/Login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/player',
    component: Player
  },
  {
    path: '/login',
    component: Login
  }
]

export default new Router({
  routes
})
