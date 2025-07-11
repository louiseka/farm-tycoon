export type Crop = {
    id: string,
    name: string,
    buyPrice: number,
    sellPrice: number,
    img: string,
    alt: string
}

export type Animal = {
    id: string,
    name: string,
    buyPrice: number,
    sellPrice: number,
    img: string,
    alt: string,
    produce: string
}

export type RawCrop = Omit<Crop, 'id'>

export type RawAnimal = Omit<Animal, 'id'>

export type Order = Crop | Animal

export type Coin = number

export type Weather = string
