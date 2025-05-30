import { Outlet, NavLink } from "react-router"

export default function ShopLayout() {
    return (
        <>
            <h1> this is shop</h1>
            <nav>
                <NavLink to="crops">Crops</NavLink>
                <NavLink to="animals">Animals</NavLink>
            </nav>
            <Outlet />
        </>
    )
}