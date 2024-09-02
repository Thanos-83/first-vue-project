import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import AddJobView from '@/views/AddJobView.vue'
import JobView from '@/views/JobView.vue'
import NotFound from '@/views/NotFound.vue'
import EditJobView from '@/views/EditJobView.vue'

const routes = [
    {
        path: '/',
        name:'home',
        component: HomeView
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView
    },
    {
        path:'/jobs/add',
        name: 'Add jobs',
        component: AddJobView
    },
    {
        path:'/jobs/edit/:id',
        name: 'Edit job',
        component: EditJobView
    },
    {
        path:'/jobs/:id',
        name:"job",
        component: JobView
    },
    {
        path: '/:catchAll(.*)',
        name: 'Not-Found',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router