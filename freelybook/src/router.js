import VueRouter from 'vue-router'
import Vue from 'vue'


import Home from './components/routerPage/Home.vue'
import Bookrack from './components/routerPage/Bookrack.vue'
import Classify from './components/routerPage/Classify.vue'
import Seniority from './components/routerPage/Seniority.vue'


Vue.use(VueRouter);


const Router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/Bookrack',
        name: 'Bookrack',
        component: Bookrack
    }, {
        path: '/Classify',
        name: 'Classify',
        component: Classify
    }, {
        path: '/Seniority',
        name: 'Seniority',
        component: Seniority
    }]
})

export default Router;