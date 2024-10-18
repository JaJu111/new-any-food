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

            <div class="add-review-box__stars">
                <div class="top-box">
                    <h2>Рейтинг: {{ selectStars }}</h2>

                    <div v-for="star in stars" @click="getReviewStars(star)">
                        <i :class="['fa-solid fa-star', {'active': star.active}]"></i>
                    </div>
                </div>

                <span v-if="noStarsSelected">Пожалуйста оцените ресторан</span>
            </div>

            <button @click="sendReview">Публиковать отзыв</button>
        </div>
    </div>
</template>

<script lang="ts">
import ReviewsComponentMixin from '@/mixins/reviews/reviews-component-mixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component
export default class ReviewsComponent extends Mixins(
    ReviewsComponentMixin
) {}

</script>

<style lang="sass" scoped>

@import ../style/reviews-component

</style>