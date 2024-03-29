import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from "@/views/SignupView.vue";
import LoginView from "@/views/LoginView.vue";
import FeedView from "@/views/FeedView.vue";
import SearchView from "@/views/SearchView.vue";
import ProfileView from "@/views/ProfileView.vue";
import FriendsView from "@/views/FriendsView.vue";
import PostView from "@/views/PostView.vue";
import ChatView from "@/views/ChatView.vue";
import TrendView from "@/views/TrendView.vue";
import EditProfileView from "@/views/EditProfileView.vue"
import NotificationsView from "@/views/NotificationsView.vue";
import EditPasswordView from "@/views/EditPasswordView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/feed',
            name: 'feed',
            component: FeedView
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignupView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/chat',
            name: 'chat',
            component: ChatView
        },
        {
            path: '/search',
            name: 'search',
            component: SearchView
        },
        {
            path: '/profile/:id',
            name: 'profile',
            component: ProfileView
        },
        {
            path: '/profile/edit',
            name: 'editProfile',
            component: EditProfileView
        },
        {
            path: '/profile/edit/password',
            name: 'editPassword',
            component: EditPasswordView
        },
        {
            path: '/profile/:id/friends',
            name: 'friends',
            component: FriendsView
        },
        {
            path: '/:id',
            name: 'postView',
            component: PostView
        },
        {
            path: '/trends/:id',
            name: 'trendsView',
            component: TrendView
        },{
            path: '/notifications',
            name: 'notificationsView',
            component: NotificationsView
        },

        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
    ]
})

export default router
