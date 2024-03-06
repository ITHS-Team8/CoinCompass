import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AccountView from '../views/AccountView.vue'
import ExpensesView from '../views/ExpensesView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/expenses',
            name: 'expenses',
            component: ExpensesView
        },
        {
            path: '/account',
            name: 'account',
            component: AccountView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        }
        /* {
            path: '/account/:id',
            name: 'account',
            component: AccountView
        } */
    ]
})

export default router
