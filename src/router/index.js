import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/api',
        name: 'api',
        component: () =>
            import ( /* webpackChunkName: "api" */ '../views/ApiView.vue')
    },
    {
        path: '/javascript',
        name: 'javascript',
        component: () =>
            import ( /* webpackChunkName: "api" */ '../views/Javascript.vue')
    },
    {
        path: '/areapolar',
        name: 'areapolar',
        component: () =>
            import ( /* webpackChunkName: "api" */ '../views/AreaPolar.vue')
    },
    {
        path: '/barra',
        name: 'barra',
        component: () =>
            import ( /* webpackChunkName: "api" */ '../views/Bar.vue')
    },
    {
        path: '/burbuja',
        name: 'burbuja',
        component: () =>
            import ( /* webpackChunkName: "api" */ '../views/Bubble.vue')
    },
    {
        path: '/radar',
        name: 'radar',
        component: () =>
            import ( /* webpackChunkName: "api" */ '../views/Radar.vue')
    },
    {
        path: '/dispersion',
        name: 'dispersion',
        component: () =>
            import ( /* webpackChunkName: "api" */ '../views/Scatter.vue')
    },

]

const router = new VueRouter({
    routes
})

export default router