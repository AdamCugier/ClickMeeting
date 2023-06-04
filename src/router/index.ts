import {createRouter, createWebHistory} from 'vue-router'
import MessagesView from "@/views/MessagesView.vue";
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'Home',
        component: HomeView
    }, {
        path: '/messages',
        name: 'messages',
        component: MessagesView
    }, {
        path: '/login',
        name: 'loginPage',
        component: LoginView
    }]
})

export default router
