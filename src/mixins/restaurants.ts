import { Vue, Component } from 'vue-property-decorator';
import { AFRestaurants } from './interface';

@Component
export default class AllRestaurants extends Vue {
    restaurants: AFRestaurants[] = [
        {
            id: 1,
            title: 'Dishoom',
            category: 'пицца, суши, веганский',
            stars: 3,
            headerImg: 'https://course-react.javascript.ru/assets/header/sushi_5.jpg',
            img: 'https://course-react.javascript.ru/assets/thumb/sushi_5.jpg',
            menu: [
                {
                    title: 'Chicken tikka masala',
                    name: 'chicken, rice',
                    amount: 12,
                    dish: 0
                },
                {
                    title: 'Naan',
                    name: 'bread',
                    amount: 3,
                    dish: 0
                },
                {
                    title: 'Samosa',
                    name: 'chicken, bread',
                    amount: 8,
                    dish: 0
                }
            ],
            rate: [
                {
                    userId: 1,
                    name: 'Антон',
                    text: 'Мне очень понравился)',
                    star: 5
                },
                {
                    userId: 2,
                    name: 'Елена',
                    text: 'Доставка быстрый!',
                    star: 4
                },
                {
                    userId: 3,
                    name: 'Ким',
                    text: 'Ммм очень вкусный',
                    star: 5
                },
            ]
        },
        {
            id: 2,
            title: 'Homeslice',
            category: 'стейк',
            stars: 4,
            headerImg: 'https://course-react.javascript.ru/assets/header/ribs_5.jpg',
            img: 'https://course-react.javascript.ru/assets/thumb/ribs_5.jpg',
            menu: [
                {
                    title: 'Margarita',
                    name: 'bread, cheese, tomatoes',
                    amount: 9,
                    dish: 0
                },
                {
                    title: 'Chef pizza',
                    name: 'bread, cheese, tomatoes, chicken',
                    amount: 10,
                    dish: 0
                }
            ],
            rate: [
                {
                    userId: 1,
                    name: 'Евгений',
                    text: 'Дольго ждать(',
                    star: 3
                },
                {
                    userId: 2,
                    name: 'Тимур',
                    text: 'Мне нравится',
                    star: 5
                }
            ]
        },
        {
            id: 3,
            title: 'Fabrique',
            category: 'азиатский, суши, морепродукты',
            stars: 5,
            headerImg: 'https://course-react.javascript.ru/assets/header/sushi_2.jpg',
            img: 'https://course-react.javascript.ru/assets/thumb/sushi_2.jpg',
            menu: [
                {
                    title: 'Cinnamon buns',
                    name: 'bread',
                    amount: 5,
                    dish: 0
                },
                {
                    title: 'Semlor',
                    name: 'bread, cream',
                    amount: 2,
                    dish: 0
                },
                {
                    title: 'Saffron bun',
                    name: 'bread',
                    amount: 4,
                    dish: 0
                }
            ],
            rate: [
                {
                    userId: 1,
                    name: 'Дима',
                    text: 'Супер, советую заказать!',
                    star: 5
                },
                {
                    userId: 2,
                    name: 'Андрей',
                    text: 'Мне нравится!',
                    star: 5
                }
            ]
        },
        {
            id: 4,
            title: 'Flat Iron',
            category: 'паста, пицца',
            stars: 2,
            headerImg: 'https://course-react.javascript.ru/assets/header/pizza_4.jpg',
            img: 'https://course-react.javascript.ru/assets/thumb/pizza_4.jpg',
            menu: [
                {
                    title: 'Flat Iron Steak',
                    name: 'beef',
                    amount: 10,
                    dish: 0
                },
                {
                    title: 'Flat Iron Burger',
                    name: 'bread, beef',
                    amount: 7,
                    dish: 0
                }
            ],
            rate: [
                {
                    userId: 1,
                    name: 'Света',
                    text: 'Супер!!!',
                    star: 5
                },
                {
                    userId: 2,
                    name: 'Анжелика',
                    text: 'Мне нравится! очень вкусный)',
                    star: 5
                }
            ]
        }
    ]
}