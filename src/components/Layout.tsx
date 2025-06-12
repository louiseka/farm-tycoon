import { Outlet } from "react-router"

import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <>
            <Header />
            <div className="side-nav">
                <h1> Farm Tycoon</h1>
            </div>
            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}