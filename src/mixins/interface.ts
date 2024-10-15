
export interface AFRestaurants {
    id: number
    title: string
    category: string
    stars: number
    headerImg: string
    img: string
    menu: AFRestaurantsInfo[]
}

export interface AFRestaurantsInfo {
    title: string
    name: string
    amount: number
    dish: number
}