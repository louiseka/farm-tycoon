import "/src/styles/farm.css"
import type { Animal } from "../../types/farmTypes"

type FarmAnimalProps = {
    farmData: Animal[]
}

export default function FarmAnimals({ farmData }: FarmAnimalProps) {

    console.log(farmData)
    const animalGrid = farmData.map((animal) => (
        <div key={animal.id} className="farm-card">
            <h3>{animal.name}</h3>
            <img src={animal.img} alt={animal.alt}></img>
        </div>
    ))


    return (
        <section className="farm-section" aria-labelledby="farm-animals-heading">
            <h2 id="farm-animals-heading">Your Farm Animals</h2>
            <div className="farm-grid">
                {animalGrid}
                {Array.from({ length: 15 - farmData.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="farm-card empty-slot" aria-hidden="true"></div>
                ))}
            </div>

        </section>
    )
}