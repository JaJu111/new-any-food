import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from '@/views/HomeView.vue';
import RestaurantComponent from '@/components/RestaurantComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import ReviewsComponent from '@/components/ReviewsComponent.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/restaurant/menu',
        component: RestaurantComponent,
        children: [
            {
                path: '/restaurant/menu',
                component: MenuComponent
            },
            {
                path: '/restaurant/reviews',
                component: ReviewsComponent
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router