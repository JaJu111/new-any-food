<template>
    <div>
        <div v-for="i in restaurant.rate" :key="i.userId" class="reviews-box">
            <div class="reviews-box__left">
                <h1>{{ i.name }}</h1>

                <span>{{ i.text }}</span>
            </div>

            <div class="reviews-box__right">
                <div v-for="star in i.star">
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>

        <div class="add-review-box">
            <h1>Оставьте свой отзыв</h1>

            <textarea v-model.trim="getReview" :class="['form-control', {'error-input': errorReview}]"></textarea>

            <h2>Рейтинг: 5</h2>

            <button @click="sendReview">Публиковать отзыв</button>
        </div>
    </div>
</template>

<script lang="ts">
import { AFRestaurants } from '@/mixins/interface';
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class ReviewsComponent extends Vue {
    restaurant: AFRestaurants = JSON.parse(sessionStorage.getItem("restaurant")) || {};
    getReview: string = '';
    errorReview: boolean = false;

    sendReview(): void {
        const ID = Math.floor(Math.random() * 20);
        
        const UserReview = {
            userId: ID,
            name: 'UNKNOWN',
            text: this.getReview,
            star: 5
        }

        if (!UserReview.text) {
            this.errorReview = true;
        } else {
            this.errorReview = false;

            this.restaurant.rate.push(UserReview);
            this.getReview = '';
        }
    }

    @Watch('getReview')
    getReviewTextarea(val: string): void {
        if (val) {
            this.errorReview = false;
        }
    }
}

</script>

<style lang="sass" scoped>

.reviews-box
    display: flex
    justify-content: space-between
    align-items: center
    padding: 20px 26px
    border: 1px solid #e5e5e5
    margin-bottom: 16px

    h1
        font-size: 18px
        line-height: 28px
        font-weight: 600
        margin-bottom: 6px

    span
        font-size: 16px
        line-height: 24px

    &__right
        display: flex
        font-size: 12px

        i
            color: #ffd25d

.add-review-box
    padding: 20px 26px
    border: 1px solid #e5e5e5

    h1
        font-size: 20px
        line-height: 28px
        font-weight: 600
        margin-bottom: 16px

    textarea
        width: 500px
        border: 1px solid #d1d0d0
        border-radius: 4px
        margin-bottom: 14px

    textarea.error-input
        border-color: #c82333
        background: #fdf2f2

    h2
        font-size: 18px

    button
        border: 1px solid #f0ad4e
        border-radius: 4px
        font-size: 18px
        line-height: 28px
        font-weight: 600
        text-align: center
        color: #f0ad4e
        background-color: transparent
        padding: 8px 20px
        padding-bottom: 10px
        margin-top: 25px
        -webkit-transition: all .2s
        transition: all .2s
        cursor: pointer
        outline: none

    button:hover
        border-color: #ffd25d
        opacity: .8

.error-input:focus
    outline: none
    background: #ffeeee
    border-color: #c82333
    box-shadow: 0 0 0 .2rem #ffc4c4


@media (max-width: 602px)
    .add-review-box
        padding: 12px 18px 24px

        h1
            font-size: 18px
            margin-bottom: 14px

        h2
            font-size: 16px

        textarea
            width: 100%

        button
            margin-top: 20px
            font-weight: 500
            line-height: 20px
            font-size: 16px

    .reviews-box
        padding: 12px 18px

        h1
            font-size: 16px
            margin-bottom: 0

        span
            font-size: 14px

</style>