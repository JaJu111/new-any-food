<template>
    <div>
        <HomeHeader />

        <Loader v-if="loadingPage" :loading="loadingPage"/>

        <div v-else class="home-page">
            <div>
                <div class="main-box">
                    <img src="../assets/header-img.jpg">

                    <div class="main-header__box">
                        <h1>Заказать еду</h1>
                        <span>Из {{ restaurants.length }} Ресторанов</span>
                    </div>
                </div>

                <div class="content-tabs">
                    <div class="tabs-header">
                        <div class="tabs-container">
                            <div class="tabs-list">
                                <span>Кухни:</span>

                                <ul>
                                    <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'Все'}">Все</li>
                                    <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'Пицца'}">Пицца</li>
                                    <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'Суши'}">Суши</li>
                                    <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'Веганский'}">Веганский</li>
                                    <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'Стейк'}">Стейк</li>
                                    <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'Азиатский'}">Азиатский</li>
                                    <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'Морепродукты'}">Морепродукты</li>
                                    <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'Паста'}">Паста</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tabs-content">
                        <div class="tab-panel">
                            <div 
                                v-for="item in getRestaurant" :key="item.id" 
                                class="restaurant-card"
                                @click="getInfoRestaurant(item)"
                            >
                                <div class="restaurant-card-img">
                                    <img :src="item.img">
                                </div>

                                <div class="restaurant-card-info">
                                    <h4>{{ item.title }}</h4>
                                    <p>{{ item.category }}</p>

                                    <div>
                                        <div v-for="i in item.stars">
                                            <i class="fa-solid fa-star"></i>
                                        </div>

                                        <span>({{ item.stars }})</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="sendCheck" class="banner-box">
                <h1>Спасибо! Ваш заказ готовится</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import HomeHeader from "@/components/HomeHeader.vue";
import Loader from "@/components/Loader.vue";
import AllRestaurants from "@/mixins/restaurants";
import { AFRestaurants } from "@/mixins/interface";

@Component({
    components: {
        HomeHeader,
        Loader
    }
})

export default class HomeComponent extends Mixins(
    AllRestaurants
) {
    currentTabsSelect: string = 'Все';
    sendCheck: boolean = JSON.parse(sessionStorage.getItem("sendCheck")) || false;
    loadingPage: boolean = false;

    created() {
        this.loadingPage = true;

        setTimeout(() => { this.loadingPage = false; }, 1500);

        if (this.sendCheck) {
            setTimeout(() => {
                this.sendCheck = false;

                sessionStorage.setItem("sendCheck", JSON.stringify(false));
            }, 5000)
        }
    }

    selectTabs(event: any): void {
        const selected: string = event.target.textContent;

        this.currentTabsSelect = selected;
    }

    getInfoRestaurant(item: AFRestaurants): void {
        this.$router.push('/restaurant/menu');

        sessionStorage.setItem('restaurant', JSON.stringify(item));
    }

    get getRestaurant(): AFRestaurants[] {
        if (this.currentTabsSelect === 'Все') {
            return this.restaurants;
        } else {
            return this.restaurants.filter((i: AFRestaurants) => {
                return i.category.toLowerCase().includes(this.currentTabsSelect.toLowerCase());
            })
        }
    }
}

</script>

<style lang="sass" scoped>

@import ../style/home

.restaurant-card
    display: flex
    padding: 20px
    border: 1px solid #e5e5e5
    margin-top: 16px
    transition: all .2s
    cursor: pointer
    user-select: none

    &-img
        width: 100px
        margin-right: 16px

    &-info
        h4
            font-size: 20px
            font-weight: 500
            margin-bottom: 6px

        p
            font-size: 17px
            margin-bottom: 6px

        i
            color: #ffd25d

        span
            margin-left: 6px

        div
            display: flex
            align-items: center
            font-size: 16px


.restaurant-card:hover
    box-shadow: 0 4px 10px rgba(0, 0, 0, .2)


@media (max-width: 640px)
    .tabs-list
        overflow-x: scroll
        justify-content: flex-start

@media (max-width: 470px)
    .restaurant-card
        padding: 16px

        &-info
            h4
                font-size: 17px
                margin-bottom: 4px

            p
                font-size: 12px
                line-height: 1

            div
                font-size: 10px

        &-img
            width: 80px

</style>