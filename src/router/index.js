import path from 'path'
import Vue from 'vue'
import Router from 'vue-router'
import WeexVueRouter from 'weex-vue-router'

const isWeb = weex.config.env.platform === 'Web'
const resolve = async(filepath) => {
  if (isWeb) {
    return () =>
      import (filepath)
  } else {
    let dir = '../../dist'
    let extname = path.extname(fullpath)
    let file = path.join(dir, path.basename(filepath, '.js'))
    return file
  }
}
const Home = resolve('@pages/home.vue')
const routes = [{
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

if (isWeb) {
  Vue.use(Router)
} else {
  Vue.use(WeexVueRouter, {
    routes,
    weex
  })
}

export default new Router({
  routes
})