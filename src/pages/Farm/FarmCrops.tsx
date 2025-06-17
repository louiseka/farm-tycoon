import type { Crop } from "../../types/farmTypes"
import "/src/styles/farm.css"

type FarmCropsProps = {
    farmData: Crop[]
}

export default function FarmCrops({ farmData }: FarmCropsProps) {

    const cropGrid = farmData.map((crop) => (
        <div key={crop.id} className="farm-card">
            <h3>{crop.name}</h3>
            <img src={crop.img} alt={crop.alt}></img>

        </div>
    ))

    console.log(farmData)


    return (
        <section className="farm-section" aria-labelledby="farm-crops-heading">
            <h2 id="farm-crops-heading">Your Farm Crops</h2>
            <div className="farm-grid">
                {cropGrid}
                {Array.from({ length: 15 - farmData.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="farm-card empty-slot" aria-hidden="true"></div>
                ))}
            </div>
        </section>


    )
}