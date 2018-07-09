import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Intro from '../components/Intro'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'landing-page',
            component: Intro
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
