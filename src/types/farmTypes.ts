export type Crop = {
    id: number,
    name: string,
    buyPrice: number,
    sellPrice: number,
    img: string,
    alt: string
}

export type Animal = {
    id: number,
    name: string,
    buyPrice: number,
    sellPrice: number,
    img: string,
    alt: string,
    produce: string
}

export type Order = Crop | Animal

export type Coin = number

export type Weather = string