import type { Crop, Animal } from "../types/farmTypes"

export function isAnimal(item: Crop | Animal): item is Animal {
    return "produce" in item
}

export function isCrop(item: Crop | Animal): item is Crop {
    return !("produce" in item)
}