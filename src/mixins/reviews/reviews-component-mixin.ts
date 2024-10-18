import { AFRestaurantRate, AFRestaurants, AFReviewsStarBox, AFUser } from '@/mixins/interface';
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class ReviewsComponentMixin extends Vue {
    restaurant: AFRestaurants = JSON.parse(sessionStorage.getItem("restaurant")) || {};
    USER: AFUser = JSON.parse(sessionStorage.getItem("user")) || {};
    getReview: string = '';
    errorReview: boolean = false;
    noStarsSelected: boolean = false;
    stars: AFReviewsStarBox[] = [
        {
            star: 1,
            active: false
        },
        {
            star: 2,
            active: false
        },
        {
            star: 3,
            active: false
        },
        {
            star: 4,
            active: false
        },
        {
            star: 5,
            active: false
        }
    ];

    sendReview(): void {
        const ID = Math.floor(Math.random() * 30);
        
        const UserReview: AFRestaurantRate = {
            userId: ID,
            name: this.USER.name,
            text: this.getReview,
            star: this.selectStars
        }

        if (!UserReview.text) {
            this.errorReview = true;
        }
        
        if (!this.selectStars) {
            this.noStarsSelected = true;
        }
        
        if (UserReview.text && this.selectStars) {
            this.stars.forEach((i: AFReviewsStarBox) => i.active = false);
            this.errorReview = false;

            this.restaurant.rate.push(UserReview);
            this.getReview = '';
        }
    }

    getReviewStars(item: AFReviewsStarBox): void {
        for (let i of this.stars) {
            if (item.star >= i.star) {
                i.active = true;
            } else {
                i.active = false;
            }
        }
    }

    get selectStars(): number {
        return this.stars.filter((i: AFReviewsStarBox) => i.active).length;
    }

    @Watch('getReview')
    getReviewTextarea(val: string): void {
        if (val) {
            this.errorReview = false;
        }
    }

    @Watch('selectStars')
    getStarsActive(val: number): void {
        if (val) {
            this.noStarsSelected = false;
        }
    }
}