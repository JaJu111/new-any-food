<template>
    <div v-if="loading" class="spinner-grow">
        <span class="sr-only"></span>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {
    @Prop({ type: Boolean, default: false }) readonly loading!: boolean;
}

</script>

<style lang="sass" scoped>

.spinner-grow 
    position: absolute
    top: 20%
    left: 50%
    width: 3rem
    height: 3rem
    background-color: #49ab39
    border-radius: 50%
    opacity: 0
    animation: grow 0.75s infinite ease-in-out
    transform: translateX(50%)
    z-index: 10

@keyframes grow 
    0% 
        transform: scale(0)
        opacity: 0

    50% 
        opacity: 1

    100% 
        transform: scale(1)
        opacity: 0

.sr-only 
    position: absolute
    width: 1px
    height: 1px
    padding: 0
    margin: -1px
    overflow: hidden
    clip: rect(0, 0, 0, 0)
    border: 0


@media (max-width: 430px)
    .spinner-grow 
        top: 30%
        left: 45%

</style>