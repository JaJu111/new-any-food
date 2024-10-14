<template>
    <div>
        <HomeHeader />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeHeader from "@/components/HomeHeader.vue";

@Component({
    components: {
        HomeHeader
    }
})

export default class HomeComponent extends Vue {}

</script>

<style lang="sass" scoped>

</style>