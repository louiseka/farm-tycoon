import "/src/styles/shop.css"
import { animalData } from "../../data/AnimalData"


export default function ShopAnimals() {
    console.log(animalData)

    const animalGrid = animalData.map((animal) => (
        <div key={animal.id} className="shop-card">
            <h3>{animal.name}</h3>
            <img className="shop-icon" src={animal.img} alt={animal.alt}></img>
            <p className="price-container"><span><img className="icon" src="/assets/coin.svg"></img></span>£{animal.sellPrice}</p>
        </div>
    ))



    return (
        <section className="shop-section">
            <h2>Animals to buy</h2>
            <div className="shop-grid">
                {animalGrid}
                {Array.from({ length: 15 - animalData.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="animal-card empty-slot"></div>
                ))}
            </div>
        </section>
    )
}