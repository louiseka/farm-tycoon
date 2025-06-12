import { Routes, Route, BrowserRouter, Navigate } from "react-router"
import { useState } from "react"

import "./styles/sidenav.css"

import type { Coin, Order, Crop, Animal } from "./types/farmTypes"
import { isAnimal, isCrop } from "./utils/typeGuard"

import Dashboard from "./pages/Dashboard"
import FarmCrops from "./pages/Farm/FarmCrops"
import FarmAnimals from "./pages/Farm/FarmAnimals"
import Stats from "./pages/Stats"
import Layout from "./components/Layout"
import FarmLayout from "./components/FarmLayout"
import ShopLayout from "./components/ShopLayout"
import ShopAnimals from "./pages/Shop/ShopAnimals"
import ShopCrops from "./pages/Shop/ShopCrops"

function App() {

  const [farm, setFarm] = useState<(Crop | Animal)[]>([])
  const [coins, setCoins] = useState(5000)

  function buyShopItem(item: Crop | Animal) {
    setFarm(prevFarm => [...prevFarm, item])
    setCoins(prevCoins => prevCoins - item.sellPrice)
  }


  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="shop" element={<ShopLayout />}>
              <Route index element={<Navigate to="crops" replace />} />
              <Route path="crops" element={<ShopCrops buyShopItem={buyShopItem} />} />
              <Route path="animals" element={<ShopAnimals buyShopItem={buyShopItem} />} />
            </Route>
            <Route path="farm" element={<FarmLayout />}>
              <Route index element={<Navigate to="crops" replace />} />
              <Route path="crops" element={<FarmCrops farmData={farm.filter(isCrop)} />} />
              <Route path="animals" element={<FarmAnimals farmData={farm.filter(isAnimal)} />} />
            </Route>
            <Route path="stats" element={<Stats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
