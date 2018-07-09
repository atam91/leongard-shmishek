import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Intro from '../components/Intro'
import Quiz from '../components/Quiz'
import Result from '../components/Result'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'landing-page',
            component: Intro
        },
        {
            path: '/quiz',
            component: Quiz
        },
        {
            path: '/result',
            component: Result
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
