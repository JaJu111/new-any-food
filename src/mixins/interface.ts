
export interface AFRestaurants {
    id: number
    title: string
    category: string
    stars: number
    headerImg: string
    img: string
    menu: AFRestaurantsInfo[]
    rate: AFRestaurantRate[]
}

export interface AFRestaurantsInfo {
    title: string
    name: string
    amount: number
    dish: number
}

export interface AFRestaurantRate {
    userId: number
    name: string
    text: string
    star: number
}

export interface AFUserSend {
    name: string
    phone: string
    address: string
}