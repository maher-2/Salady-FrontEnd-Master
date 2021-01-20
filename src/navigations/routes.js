import React from 'react'

const Splash = React.lazy(() => import('../views/Splash/Splash'))
const Login = React.lazy(() => import('../views/Login/Login'))
const Dashboard = React.lazy(() => import('../views/Dashboard/Dashboard'))
const OrderList = React.lazy(() => import('../views/OrderList/OrderList'))

const routes = [
  { path: '/', exact: true, name: 'Splash', component: Splash },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/orderlist', exact: true, name: 'OrderList', component: OrderList, auth: false },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard, auth: true }
]

export default routes
