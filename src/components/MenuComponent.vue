<template>
    <div class="menu-box">
        <div class="menu-left">
            <div v-for="(i, idx) in restaurant.menu" :key="idx" class="menu-left__card">
                <div>
                    <h1>{{ i.title }}</h1>
                    <span>{{ i.name }}</span>
                    <p>{{ getPrice(i.amount) }} {{ currentCurrency }}</p>
                </div>

                <div class="add-content">
                    <h1>{{ i.dish }}</h1>

                    <div class="add-dish">
                        <button @click="deleteDish(i)">-</button>
                        <button @click="getDish(i)" class="ml-1">+</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="menu-right">
            <h1>Menu Right: {{ restaurant.title }}</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { AFRestaurants, AFRestaurantsInfo } from '@/mixins/interface';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MenuComponent extends Vue {
    @Prop({ type: String, default: '' }) !readonly currentCurrency: string;

    restaurant: AFRestaurants = JSON.parse(sessionStorage.getItem("restaurant")) || {};

    getPrice(amount: number): string {
        if (this.currentCurrency === 'USD') {
            return amount.toFixed(2);

        } else if (this.currentCurrency === 'RUB') {
            let RUB = 97.04;
            let result = amount * RUB;

            return result.toFixed(2);
        } else {
            let UZS = 12806.30;
            let result = amount * UZS;

            return this.format(+result.toFixed());
        }
    }

    format(v: number): string {
        let value = Number(v).toLocaleString('ru').replace(',', '.');
        let [ mainValue, subValue ] = value.split('.');
        subValue = subValue || '';

        return mainValue + subValue;
    }

    getDish(i: AFRestaurantsInfo): void {
        i.dish += 1;
    }

    deleteDish(i: AFRestaurantsInfo): void {
        if (i.dish === 0) return

        i.dish -= 1;
    }
}

</script>

<style lang="sass" scoped>

.menu
    &-box
        display: flex

    &-left
        width: 54%

        &__card
            display: flex
            justify-content: space-between
            padding: 20px 26px
            border: 1px solid #e5e5e5
            margin-bottom: 16px

            h1
                font-size: 19px
                font-weight: 500
                margin-bottom: 4px

            span
                font-size: 17px

            p
                font-size: 18px
                font-weight: 500
                color: #f0ad4e
                margin-top: 10px

    &-right
        width: 46%
        margin-left: 24px
        background-color: #fff0db
        padding: 13px 16px 20px


.add-dish
    display: flex

    button
        color: #fff
        background-color: #f0ad4e
        border-radius: 2px
        width: 36px
        height: 36px
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        font-weight: 700
        outline: none
        cursor: pointer

.add-content
    text-align: center

    h1
        color: #898989
        font-weight: 600
        margin-bottom: 5px
        font-size: 18px
        line-height: 28px


@media (max-width: 840px)
    .menu
        &-box
            flex-direction: column

        &-left
            width: 100%

        &-right
            width: 100%
            margin-left: 0


</style>