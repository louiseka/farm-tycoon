import { Routes, Route, BrowserRouter, Navigate } from "react-router"
import { useState, useEffect } from "react"

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

  const [farm, setFarm] = useState<(Crop | Animal)[]>(() => {
    const savedFarm = window.localStorage.getItem('saved-farm')
    return savedFarm !== null ? JSON.parse(savedFarm) : []
  })
  const [coins, setCoins] = useState<Coin>(() => {
    const savedCoins = window.localStorage.getItem('saved-coins')
    return savedCoins !== null ? JSON.parse(savedCoins) : 5000
  })

  const [weather, setWeather] = useState<string>("")

  function buyShopItem(item: Crop | Animal) {
    setFarm(prevFarm => [...prevFarm, item])
    setCoins(prevCoins => prevCoins - item.sellPrice)
  }

  useEffect(() => {
    window.localStorage.setItem('saved-farm', JSON.stringify(farm))
  }, [farm])

  useEffect(() => {
    window.localStorage.setItem('saved-coins', JSON.stringify(coins))
  }, [coins])

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.817871&lon=-0.372882&appid=38fdb4a7c5c6cdc11bf4139a539aeaac')
        const data = await response.json()
        setWeather(data.weather[0].main)
      } catch (error) {
        console.error("Error fetching weather data", error)
      }
    }
    fetchWeather()
  }, [])



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout coins={coins} />}>
            <Route index element={<Dashboard coins={coins} weather={weather} />} />
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
