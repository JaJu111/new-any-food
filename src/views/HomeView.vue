<template>
  <div>
    <HomeComponent />
  </div>
</template>

<script lang="ts">
import HomeComponent from '@/components/HomeComponent.vue';
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    HomeComponent
  }
})

export default class HomeView extends Vue {}
</script>
