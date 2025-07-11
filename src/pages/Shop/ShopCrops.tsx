import "/src/styles/shop.css"
import { rawCropData } from "../../data/CropData"
import type { RawCrop } from "../../types/farmTypes"

type ShopCropsProps = {
    buyShopItem: (item: RawCrop) => void
}

export default function ShopCrops({ buyShopItem }: ShopCropsProps) {

    const cropGrid = rawCropData.map((crop) => (
        <div key={crop.name} className="shop-card">
            <h3>{crop.name}</h3>
            <button className="shop-btn" aria-label={`Buy ${crop.name}`} onClick={() => buyShopItem(crop)}><img className="shop-icon" src={crop.img} alt={crop.alt}></img></button>
            <p className="price-container"><span><img className="icon" alt="" role="presentation" src="/assets/Icons/coin.svg"></img></span>£{crop.sellPrice}</p>
        </div>
    ))

    return (
        <section className="shop-section" aria-labelledby="shop-crops-heading">
            <h2 id="shop-crops-heading">Crops to buy</h2>
            <div className="shop-grid">
                {cropGrid}
                {Array.from({ length: 15 - rawCropData.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="shop-card empty-slot" aria-hidden="true"></div>
                ))}
            </div>
        </section>

    )
}