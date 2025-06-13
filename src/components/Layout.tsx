import { Outlet, useLocation } from "react-router"

import Header from "./Header"
import Footer from "./Footer"
import FarmNav from "./FarmNav"
import ShopNav from "./ShopNav"

export default function Layout() {

    const location = useLocation()

    return (
        <>
            <Header />
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