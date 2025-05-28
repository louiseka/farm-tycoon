import { Routes, Route, BrowserRouter } from "react-router"

import Dashboard from "./pages/Dashboard"
import Shop from "./pages/Shop"
import Farm from "./pages/Farm/Farm"
import Crops from "./pages/Farm/Crops"
import Animals from "./pages/Farm/Animals"
import Stats from "./pages/Stats"
import Layout from "./components/Layout"
import FarmLayout from "./components/FarmLayout"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="shop" element={<Shop />} />
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
