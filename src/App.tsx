import { Routes, Route, BrowserRouter } from "react-router"

import Dashboard from "./pages/Dashboard"
import Shop from "./pages/Shop/Shop"
import Farm from "./pages/Farm/Farm"
import Crops from "./pages/Farm/FarmCrops"
import Animals from "./pages/Farm/FarmAnimals"
import Stats from "./pages/Stats"
import Layout from "./components/Layout"
import FarmLayout from "./components/FarmLayout"
import ShopLayout from "./components/ShopLayout"
import ShopAnimals from "./pages/Shop/ShopAnimals"
import ShopCrops from "./pages/Shop/ShopCrops"

function App() {

  type Crop = {
    name: string,
    buyPrice: number,
    sellPrice: number,
    img: string,
    alt: string
  }

  type Animal = {
    name: string,
    buyPrice: number,
    sellPrice: number,
    img: string,
    alt: string,
    produce: string
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="shop" element={<ShopLayout />}>
              <Route index element={<Shop />} />
              <Route path="crops" element={<ShopCrops />} />
              <Route path="animals" element={<ShopAnimals />} />
            </Route>
            <Route path="farm" element={<FarmLayout />}>
              <Route index element={<Farm />} />
              <Route path="crops" element={<Crops />} />
              <Route path="animals" element={<Animals />} />
            </Route>
            <Route path="stats" element={<Stats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
