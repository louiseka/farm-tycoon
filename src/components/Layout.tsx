import { Outlet, useLocation } from "react-router"
import "/src/styles/coins.css"

import Header from "./Header"
import Footer from "./Footer"
import FarmNav from "./FarmNav"
import ShopNav from "./ShopNav"


import type { Coin } from "../types/farmTypes"

type coinProps = {
    coins: Coin
}

export default function Layout({ coins }: coinProps) {

    const location = useLocation()

    return (
        <>
            <Header />
            <div className="coins-ext-section">
                <div className="coins-inner-section">
                    <img className="coin-icon" src="../assets/Icons/coins.svg"></img>
                    <p>£{coins} gold</p>
                </div>
            </div>
            <div className="side-nav">
                <h1> Farm Tycoon</h1>
                {location.pathname.startsWith("/farm") && (
                    <FarmNav />
                )}

                {location.pathname.startsWith("/shop") && (
                    <ShopNav />
                )}
            </div>
            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}