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
            <button className="shop-btn" aria-label={`Buy ${animal.name}`} onClick={() => buyShopItem(animal)}><img src={animal.img} alt={animal.alt}></img></button>
            <p className="price-container"><span><img className="icon" role="presentation" src="/assets/Icons/coin.svg"></img></span>£{animal.sellPrice}</p>
        </div>
    ))



    return (
        <section className="shop-section" aria-labelledby="shop-animals-heading">
            <h2 id="shop-animals-heading">Animals to buy</h2>
            <div className="shop-grid">
                {animalGrid}
                {Array.from({ length: 15 - animalData.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="shop-card empty-slot" aria-hidden="true"></div>
                ))}
            </div>
        </section>
    )
}