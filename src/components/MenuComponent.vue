<template>
    <div :class="['menu-box', {'send': selectCheck}]">
        <div v-if="!selectCheck" class="menu-left">
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

        <div v-else class="menu-left">
            <div class="form-send">
                <span class="form-send__title">Name</span>
                <input v-model.trim="userName" type="text" class="form-control my-2">

                <span class="form-send__title">Phone Number</span>
                <input v-model.trim="userPhone" type="text" class="form-control my-2">

                <span class="form-send__title">Address</span>
                <textarea v-model.trim="userAdress" class="form-control my-2"></textarea>

                <button class="checkout-btn" @click="sendCheck">Order</button>
            </div>
        </div>

        <div class="menu-right">
            <h1 v-if="!getMenuArr.length">Select a meal from the list</h1>
            <h1 v-else>Basket</h1>

            <div v-if="getMenuArr.length" v-for="(i, idx) in restaurant.menu" :key="idx" class="add-card">
                <span v-if="i.dish !== 0" class="title">{{ i.title }}</span>

                <div class="item-card">
                    <div v-if="i.dish !== 0" class="add-dish__right">
                        <button @click="deleteDish(i)" class="mr-2">-</button>
                        <span v-if="i.dish !== 0" class="amount">{{ i.dish }}</span>
                        <button @click="getDish(i)" class="ml-2">+</button>
                    </div>

                    <span v-if="i.dish !== 0" class="amount">{{ addPrice(i) }} {{ currentCurrency }}</span>
                </div>
            </div>

            <div v-if="getMenuArr.length" class="line-box"></div>

            <div v-if="getMenuArr.length" class="checkout-box">
                <div class="checkout-box__info">
                    <span class="checkout-box__info-text">Sub-total</span>
                    <span class="checkout-box__info-text">{{ getTotalAmount }} {{ currentCurrency }}</span>
                </div>
                <div class="checkout-box__info">
                    <span class="checkout-box__info-text">Delivery costs:</span>
                    <span class="checkout-box__info-text">FREE</span>
                </div>
                <div class="checkout-box__info">
                    <span class="checkout-box__info-total">Total</span>
                    <span class="checkout-box__info-total">{{ getTotalAmount }} {{ currentCurrency }}</span>
                </div>

                <button v-if="!selectCheck" class="checkout-btn" @click="changeCheck">Checkout</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import MenuComponentMixin from '@/mixins/menu/menu-component-mixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component
export default class MenuComponent extends Mixins(
    MenuComponentMixin
) {}

</script>

<style lang="sass" scoped>

@import ../style/menu-component

</style>