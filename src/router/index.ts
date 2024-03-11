import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AccountView from '../views/AccountView.vue'
import ExpensesView from '../views/ExpensesView.vue'
import LoginView from '../views/LoginView.vue'
import { getAuth } from 'firebase/auth'

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
            meta: {
                requiresAuth: true
            },
            component: ExpensesView
        },
        {
            path: '/account',
            meta: {
                requiresAuth: true 
            },
            name: 'account',
            component: AccountView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        }
    ]
})

router.beforeEach((to, from, next) => {
    const auth = getAuth()
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthenticated = auth.currentUser
    if (requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router
