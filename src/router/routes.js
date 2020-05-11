const store = require('app/src/store/index')
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'home' },
      { path: '/login', component: () => import('pages/login.vue'), name: 'login' },
      {
        path: '/employee',
        component: () => import('pages/employee.vue'),
        name: 'employee',
        beforeEnter: (to, from, next) => {
          if ((from.name !== 'login' || from.name !== 'home') &&
          !store.default.getters['store/isLogged']) {
            console.log('niesi prihlaseny')
            next('login')
          } else {
            next()
          }
        }
      },
      {
        path: '/udalost/:id',
        component: () => import('pages/UdalostDetail.vue'),
        name: 'udalost',
        beforeEnter: (to, from, next) => {
          if ((from.name !== 'login' || from.name !== 'home') &&
          !store.default.getters['store/isLogged']) {
            console.log('niesi prihlaseny')
            next('login')
          } else {
            next()
          }
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
