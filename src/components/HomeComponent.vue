<template>
    <div>
        <HomeHeader />

        <div class="main-box">
            <img src="../assets/header-img.jpg">

            <div>
                <h1>Order Food</h1>
                <span>From {{ restaurants.length }} Restaurants</span>
            </div>
        </div>

        <div class="content-tabs">
            <div class="tabs-header">
                <div class="tabs-container">
                    <div class="tabs-list">
                        <span>Cuisines:</span>

                        <ul>
                            <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'all'}">all</li>
                            <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'pizza'}">pizza</li>
                            <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'sushi'}">sushi</li>
                            <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'vegan'}">vegan</li>
                            <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'steak'}">steak</li>
                            <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'asian'}">asian</li>
                            <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'seafood'}">seafood</li>
                            <li @click="selectTabs($event)" :class="{'active': currentTabsSelect === 'pasta'}">pasta</li>
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
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import HomeHeader from "@/components/HomeHeader.vue";
import AllRestaurants from "@/mixins/restaurants";
import { AFRestaurants } from "@/mixins/interface";

@Component({
    components: {
        HomeHeader
    }
})

export default class HomeComponent extends Mixins(
    AllRestaurants
) {
    currentTabsSelect: string = 'all';

    selectTabs(event: any): void {
        const selected: string = event.target.textContent;

        this.currentTabsSelect = selected;
    }

    getInfoRestaurant(item: AFRestaurants) {
        console.log(item);
    }

    get getRestaurant(): AFRestaurants[] {
        if (this.currentTabsSelect === 'all') {
            return this.restaurants;
        } else {
            return this.restaurants.filter((i: AFRestaurants) => {
                return i.category.toLowerCase().includes(this.currentTabsSelect);
            })
        }
    }
}

</script>

<style lang="sass" scoped>

@import ../style/home

.tabs-header
    padding: 0 24px
    background-color: #e5e5e5

.tabs-container
    margin: 0 auto
    max-width: 900px
    width: 100%

.tabs-list
    display: flex
    justify-content: center
    user-select: none

    span
        padding: 12px 0
        font-size: 18px
        font-weight: bold
    
    ul
        display: flex

        li
            padding: 12px 0
            margin: 0 0 0 24px
            font-size: 18px
            line-height: 1.5
            font-weight: 400
            cursor: pointer

        li.active
            border-bottom: 4px solid #000


.tabs-content
    padding: 30px 0

.tab-panel
    padding: 0 24px
    margin: 0 auto
    max-width: 900px
    width: 100%

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

</style>