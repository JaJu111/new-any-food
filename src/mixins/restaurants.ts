import { Vue, Component } from 'vue-property-decorator';
import { AFRestaurants } from './interface';

@Component
export default class AllRestaurants extends Vue {
    restaurants: AFRestaurants[] = [
        {
            title: 'Dishoom',
            category: 'pizza, sushi, vegan',
            stars: 4,
            img: 'https://course-react.javascript.ru/assets/thumb/sushi_5.jpg',
            menu: [
                {
                    title: 'Chicken tikka masala',
                    name: 'chicken, rice',
                    amount: 1200
                },
                {
                    title: 'Naan',
                    name: 'bread',
                    amount: 300
                },
                {
                    title: 'Samosa',
                    name: 'chicken, bread',
                    amount: 800
                }
            ]
        },
        {
            title: 'Homeslice',
            category: 'steak',
            stars: 4,
            img: 'https://course-react.javascript.ru/assets/thumb/ribs_5.jpg',
            menu: [
                {
                    title: 'Margarita',
                    name: 'bread, cheese, tomatoes',
                    amount: 900
                },
                {
                    title: 'Chef pizza',
                    name: 'bread, cheese, tomatoes, chicken',
                    amount: 1000
                }
            ]
        },
        {
            title: 'Fabrique',
            category: 'asian, sushi, seafood',
            stars: 5,
            img: 'https://course-react.javascript.ru/assets/thumb/sushi_2.jpg',
            menu: [
                {
                    title: 'Cinnamon buns',
                    name: 'bread',
                    amount: 500
                },
                {
                    title: 'Semlor',
                    name: 'bread, cream',
                    amount: 200
                },
                {
                    title: 'Saffron bun',
                    name: 'bread',
                    amount: 400
                }
            ]
        },
        {
            title: 'Flat Iron',
            category: 'pasta, pizza',
            stars: 2,
            img: 'https://course-react.javascript.ru/assets/thumb/pizza_4.jpg',
            menu: [
                {
                    title: 'Flat Iron Steak',
                    name: 'beef',
                    amount: 1000
                },
                {
                    title: 'Flat Iron Burger',
                    name: 'bread, beef',
                    amount: 1000
                }
            ]
        }
    ]
}