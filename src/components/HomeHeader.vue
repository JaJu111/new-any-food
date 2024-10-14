<template>
    <div>
        <div class="navbar-box">
            <div class="navbar-box-container">
                <div></div>
                
                <router-link to="/">
                    <img src="../assets/logo.svg" class="mt-1">
                </router-link>

                <div class="select-box">
                    <div class="form-check">
                        <span @click="getCurrency($event)" :class="{'active': currentCurrency === 'USD'}">USD</span>
                        <div></div>
                    </div>
                    <div class="form-check">
                        <span @click="getCurrency($event)" :class="{'active': currentCurrency === 'EUR'}">EUR</span>
                        <div></div>
                    </div>
                    <div class="form-check">
                        <span @click="getCurrency($event)" :class="{'active': currentCurrency === 'RUB'}">RUB</span>
                        <div></div>
                    </div>
                    <div class="form-check">
                        <span @click="getCurrency($event)" :class="{'active': currentCurrency === 'UZS'}">UZS</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HomeHeader extends Vue {
    currentCurrency: string = JSON.parse(sessionStorage.getItem("currency")) || 'USD';

    getCurrency(event: any): void {
        const currency = event.target.textContent;

        this.currentCurrency = currency;

        sessionStorage.setItem("currency", JSON.stringify(currency));
    }
}

</script>

<style lang="sass" scoped>

@import ../style/home-header

</style>