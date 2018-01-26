import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Job from '@/components/Job'
import Blog from '@/components/Blog'
import About from '@/components/About'
import Skill from '@/components/Skill'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/blog',
      name: 'Blog',
      component: Blog
    },{
      path: '/skill',
      name: 'Skill',
      component: Skill
    },{
      path: '/job',
      name: 'Job',
      component: Job
    },{
      path: '/error',
      name: 'Error',
      component: Error
    }
  ]
})
