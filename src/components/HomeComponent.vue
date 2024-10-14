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
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import HomeHeader from "@/components/HomeHeader.vue";
import AllRestaurants from "@/mixins/restaurants";

@Component({
    components: {
        HomeHeader
    }
})

export default class HomeComponent extends Mixins(
    AllRestaurants
) {}

</script>

<style lang="sass" scoped>

@import ../style/home

</style>