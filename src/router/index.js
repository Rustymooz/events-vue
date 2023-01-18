import { createRouter, createWebHistory } from "vue-router"
import HomePage from '../views/HomePage.vue'
import EventsList from '../components/EventsList.vue'
import NotFound from '../views/NotFound.vue'
import Event from '../components/Event.vue'
import EventsByType from '../components/EventsByType.vue'
import AddEvent from '../components/AddEvent.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/eventslist',
        name: 'EventsList',
        component: EventsList
    },
    {
        path: '/eventslist/:type',
        name: 'EventsByType',
        component: EventsByType
    },
    {
        path: '/event/:id',
        name: 'Event',
        component: Event
    },
    {
        path: '/addevent',
        name: 'AddEvent',
        component: AddEvent
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router