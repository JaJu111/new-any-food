<template>
    <div>
        <h1>ReviewsComponent: {{ restaurant.title }}</h1>
    </div>
</template>

<script lang="ts">
import { AFRestaurants } from '@/mixins/interface';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ReviewsComponent extends Vue {
    restaurant: AFRestaurants = JSON.parse(sessionStorage.getItem("restaurant")) || {};
}

</script>

<style lang="sass" scoped>

</style>