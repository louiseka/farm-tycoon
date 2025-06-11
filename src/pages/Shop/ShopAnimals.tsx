import "/src/styles/shop.css"
import { animalData } from "../../data/AnimalData"
import type { Animal } from "../../types/farmTypes"

type ShopAnimalProps = {
    buyShopItem: (item: Animal) => void
}

export default function ShopAnimals({ buyShopItem }: ShopAnimalProps) {

    const animalGrid = animalData.map((animal) => (
        <div key={animal.id} className="shop-card">
            <h3>{animal.name}</h3>
            <button className="shop-btn" onClick={() => buyShopItem(animal)}><img src={animal.img} alt={animal.alt}></img></button>
            <p className="price-container"><span><img className="icon" src="/assets/Icons/coin.svg"></img></span>£{animal.sellPrice}</p>
        </div>
    ))



    return (
        <section className="shop-section">
            <h2>Animals to buy</h2>
            <div className="shop-grid">
                {animalGrid}
                {Array.from({ length: 15 - animalData.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="shop-card empty-slot"></div>
                ))}
            </div>
        </section>
    )
}