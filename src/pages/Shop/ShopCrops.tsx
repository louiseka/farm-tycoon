import "/src/styles/shop.css"
import { cropData } from "../../data/CropData"

export default function ShopCrops() {

    const cropGrid = cropData.map((crop) => (
        <div key={crop.id} className="shop-card">
            <h3>{crop.name}</h3>
            <img className="shop-icon" src={crop.img} alt={crop.alt}></img>
            <p className="price-container"><span><img className="icon" src="/assets/coin.svg"></img></span>£{crop.sellPrice}</p>

        </div>
    ))

    return (
        <section className="shop-section">
            <h2>Crops to buy</h2>
            <div className="shop-grid">
                {cropGrid}
                {Array.from({ length: 15 - cropData.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="shop-card empty-slot"></div>
                ))}
            </div>
        </section>

    )
}