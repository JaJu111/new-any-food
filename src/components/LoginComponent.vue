<template>
    <div>
        <div class="login-page">
            <div class="bg-box"></div>
            <div class="login-content">
                <div class="top-box">
                    <h3 class="title">Войти</h3>

                    <img src="../assets/logo.svg">
                </div>

                <form class="form" @submit.prevent="submitHandler">
                    <span>Имя</span>
                    <input 
                        v-model.trim="userName" 
                        type="text" 
                        :class="['form-control', {'mb-4': !errorName}, {'error-input': errorName}]"
                    >
                    <p v-if="errorName" class="error-text">Введите Имя</p>

                    <span>Номер телефон</span>
                    <div class="password-eye">
                        <input 
                            v-model.trim="userPhone" 
                            type="number" 
                            :class="['form-control', {'mb-4': !errorPhone}, {'error-input': errorPhone}]"
                        >
                    </div>
                    <p v-if="errorPhone" class="error-text">Введите номер телефона</p>

                    <div class="form-bottom">
                        <button class="btn btn-warning" type="submit">Войти</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { AFUser } from '@/mixins/interface';
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class LoginComponent extends Vue {
    userName: string = '';
    userPhone: string = '';
    errorName: boolean = false;
    errorPhone: boolean = false;

    submitHandler() {
        const user: AFUser = {
            name: this.userName,
            phoneNumber: this.userPhone
        }

        if (!user.name) {
            this.errorName = true;
        } else {
            this.errorName = false;
        }

        if (!user.phoneNumber) {
            this.errorPhone = true;
        } else {
            this.errorPhone = false;
        }

        if (user.name && user.phoneNumber) {
            this.$router.push({
                name: 'home',
                params: {
                    path: '/home'
                }
            });

            sessionStorage.setItem('user', JSON.stringify(user));
            this.userName = this.userPhone = '';
        }
    }

    @Watch('userName')
    getUserName(val: string): void {
        if (val) {
            this.errorName = false;
        }
    }

    @Watch('userPhone')
    getUserPhone(val: string): void {
        if (val) {
            this.errorPhone = false;
        }
    }
}

</script>

<style lang="sass" scoped>

@import ../style/login-component

</style>