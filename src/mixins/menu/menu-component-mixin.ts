import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { AFRestaurants, AFRestaurantsInfo, AFUserSend } from '../interface';

@Component
export default class MenuComponentMixin extends Vue {
    @Prop({ type: String, default: '' }) !readonly currentCurrency: string;

    restaurant: AFRestaurants = JSON.parse(sessionStorage.getItem("restaurant")) || {};
    selectCheck: boolean = false;
    userName: string = '';
    userPhone: string = '';
    userAdress: string = '';
    errorName: boolean = false;
    errorPhone: boolean = false;
    errorAddress: boolean = false;

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

    addPrice(item: AFRestaurantsInfo): string {
        if (this.currentCurrency === 'USD') {
            let USD = 1;
            let result = item.amount * USD;

            if (item.dish === 1) {
                return this.format(+result.toFixed());
            } else {
                result = item.amount * USD * item.dish;

                return this.format(+result.toFixed());
            }

        } else if (this.currentCurrency === 'RUB') {
            let RUB = 97.04;
            let result = item.amount * RUB;

            if (item.dish === 1) {
                return this.format(+result.toFixed());
            } else {
                result = item.amount * RUB * item.dish;

                return this.format(+result.toFixed());
            }

        } else {
            let UZS = 12806.30;
            let result = item.amount * UZS;

            if (item.dish === 1) {
                return this.format(+result.toFixed());
            } else {
                result = item.amount * UZS * item.dish;

                return this.format(+result.toFixed());
            }
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
        if (i.dish === 0) return;

        i.dish -= 1;
    }

    changeCheck(): void {
        this.selectCheck = true;
    }

    sendCheck(): void {
        const USER: AFUserSend = {
            name: this.userName,
            phone: this.userPhone,
            address: this.userAdress
        }

        if (!USER.name) {
            this.errorName = true;
        } else {
            this.errorName = false;
        }

        if (!USER.phone) {
            this.errorPhone = true;
        } else {
            this.errorPhone = false;
        }

        if (!USER.address) {
            this.errorAddress = true;
        } else {
            this.errorAddress = false;
        }

        if (USER.name && USER.phone && USER.address) {
            this.$router.push('/home');

            sessionStorage.setItem('user', JSON.stringify(USER));
            sessionStorage.setItem("sendCheck", JSON.stringify(true));

            this.userName = this.userPhone = this.userAdress = '';
        }
    }

    get getMenuArr(): AFRestaurantsInfo[] {
        return this.restaurant.menu.filter((i: AFRestaurantsInfo) => i.dish !== 0);
    }

    get getTotalAmount(): string {
        let amount = +this.restaurant.menu.reduce((sum: number, n: AFRestaurantsInfo) => sum += n.dish > 0 ? n.amount * n.dish : 0, 0);

        if (this.currentCurrency === 'USD') {
            let USD = 1;
            let result = amount * USD;

            return this.format(+result.toFixed());

        } else if (this.currentCurrency === 'RUB') {
            let RUB = 97.04;
            let result = amount * RUB;

            return this.format(+result.toFixed());

        } else {
            let UZS = 12806.30;
            let result = amount * UZS;

            return this.format(+result.toFixed());
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

    @Watch('userAdress')
    getUserAdress(val: string): void {
        if (val) {
            this.errorAddress = false;
        }
    }
}