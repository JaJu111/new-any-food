
export interface AFRestaurants {
    title: string
    category: string
    stars: number
    img: string
    menu: AFRestaurantsInfo[]
}

export interface AFRestaurantsInfo {
    title: string
    name: string
    amount: number
}