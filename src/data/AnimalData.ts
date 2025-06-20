import type { Animal } from "../types/farmTypes"

export const animalData: Animal[] = [{
    id: 1,
    name: "Chicken",
    buyPrice: 100,
    sellPrice: 200,
    img: "/assets/Animals/chicken.svg",
    alt: "A graphic of a golden chicken.",
    produce: "Eggs"
},
{
    id: 2,
    name: "Cow",
    buyPrice: 500,
    sellPrice: 1000,
    img: "/assets/Animals/cow.svg",
    alt: "A graphic of a smiling black and white cow.",
    produce: "Milk"
},
{
    id: 3,
    name: "Sheep",
    buyPrice: 400,
    sellPrice: 800,
    img: "/assets/Animals/sheep.svg",
    alt: "A graphic of a smiling white wooly sheep.",
    produce: "Wool"
},
{
    id: 4,
    name: "Pig",
    buyPrice: 300,
    sellPrice: 600,
    img: "/assets/Animals/pig.svg",
    alt: "A graphic of a smiling pink pig.",
    produce: "Truffles"
},]