/**
 * Created by johnnyribeiro on 15/06/2017.
 */
import Vue from 'vue'
import Router from 'vue-router'

import App from '../App.vue'
import Map from '../components/Map.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: App
        },
        {
            path: '/map',
            name: 'Map',
            component: Map
        }
    ]
})
