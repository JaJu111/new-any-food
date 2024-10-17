<template>
    <div>
        <HomeHeader
            @currency="getCurrency"
        />

        <Loader v-if="loadingPage" :loading="loadingPage"/>

        <div v-else>
            <div class="main-box">
                <div class="back"></div>
                <img :src="restaurant.headerImg">

                <div class="content">
                    <h1>{{ restaurant.title }}</h1>
                    <span>{{ restaurant.category }}</span>

                    <div class="rate">
                        <div v-for="i in restaurant.stars">
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <span>({{ restaurant.stars }})</span>
                    </div>
                </div>
            </div>

            <div class="content-tabs">
                <div class="tabs-header">
                    <div class="tabs-container">
                        <div class="tabs-list">
                            <ul>
                                <li @click="selectTabs($event)" :class="{'active': $route.path === '/restaurant/menu'}">Menu</li>
                                <li @click="selectTabs($event)" :class="{'active': $route.path === '/restaurant/reviews'}">Reviews</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="tabs-content">
                    <div class="tab-panel">
                        <router-view :currentCurrency="currentCurrency" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { AFRestaurants } from '@/mixins/interface';
import { Vue, Component } from 'vue-property-decorator';
import HomeHeader from "@/components/HomeHeader.vue";
import Loader from "@/components/Loader.vue";

@Component({
    components: {
        HomeHeader,
        Loader
    }
})

export default class RestaurantComponent extends Vue {
    restaurant: AFRestaurants = JSON.parse(sessionStorage.getItem("restaurant")) || {};
    currentCurrency: string = JSON.parse(sessionStorage.getItem("currency")) || 'USD';
    currentTabsSelect: string = 'Menu';
    loadingPage: boolean = false;

    created() {
        this.loadingPage = true;

        setTimeout(() => { this.loadingPage = false; }, 1000);

        this.init();
    }

    init(): void {
        if (this.currentTabsSelect === 'Menu') {
            if (this.$route.path !== '/restaurant/menu') {
                this.$router.push('/restaurant/menu');
            }
        } else {
            this.$router.push('/restaurant/reviews');
        }
    }

    getCurrency(cur: string): void {
        this.currentCurrency = cur;
    }

    selectTabs(event: any): void {
        const selected: string = event.target.textContent;

        this.currentTabsSelect = selected;

        this.init();
    }
}

</script>

<style lang="sass" scoped>

@import ../style/home

</style>