/**
 * Created by zhongzikuli <hgb102xlg@126.com> on 18/6/10.
 */
const _import = require('./_import');
import Layout from '@/page/index/'

export default [{
  path: '/',
  name: '主页',
  redirect: '/wel'
}, {
  path: '/wel',
  component: Layout,
  redirect: '/wel/index',
  children: [{
    path: 'index',
    name: '首页',
    component: _import('wel')
  }]
}, {
  path: '*',
  redirect: '/404',
  hidden: true
}, {
  path: '/login',
  name: '登录页',
  component: _import('login/index')
}, {
  path: '/lock',
  name: '锁屏页',
  component: _import('lock/index')
}, {
  path: '/crud',
  component: Layout,
  redirect: '/crud/index',
  children: [{
    path: 'index',
    name: 'crud实例',
    component: _import('crud/index', 'views')
  }]
}, {
  path: '/admin',
  component: Layout,
  redirect: '/admin/user',
  children: [{
    path: 'user',
    name: '用户管理',
    component: _import('admin/user/index', 'views')
  }, {
    path: 'menu',
    name: '菜单管理',
    component: _import('admin/menu/index', 'views')
  }, {
    path: 'role',
    name: '角色管理',
    component: _import('admin/role/index', 'views')
  }, {
    path: 'dept',
    name: '部门管理',
    component: _import('admin/dept/index', 'views')
  }, {
    path: 'dict',
    name: '字典管理',
    component: _import('admin/dict/index', 'views')
  }]
}, {
  path: '/position',
  component: Layout,
  redirect: '/position/supervise',
  children: [{
    path: 'supervise',
    name: '定位监控',
    meta: {
      keepAlive: true
    },
    component: _import('location/supervise/index', 'views')
  }]
}, {
  path: '/home',
  component: Layout,
  redirect: '/home/index',
  children: [{
    path: 'index',
    name: '设备统计',
    meta: {
      keepAlive: true
    },
    component: _import('home/index', 'views')
  }]
}, {
  path: '/device',
  component: Layout,
  redirect: '/device/gps',
  children: [{
    path: 'gps',
    name: '设备管理',
    meta: {
      keepAlive: true
    },
    component: _import('device/gps/index', 'views')
  }]
}, {
  path: '/404',
  component: _import('error-page/404', 'components'),
  name: '404'
}, {
  path: '/403',
  component: _import('error-page/403', 'components'),
  name: '403'
}, {
  path: '/500',
  component: _import('error-page/500', 'components'),
  name: '500'
}, {
  path: '/myiframe',
  component: Layout,
  redirect: '/myiframe',
  meta: {
    keepAlive: true
  },
  children: [{
    path: ':routerPath',
    name: 'iframe',
    component: _import('iframe/main', 'components'),
    props: true
  }]
}]
