import { Outlet, NavLink } from "react-router"

export default function FarmLayout() {
    return (
        <>
            <h1> this is farm</h1>
            <nav>
                <NavLink to="crops">Crops</NavLink>
                <NavLink to="animals">Animals</NavLink>
            </nav>
            <Outlet />
        </>
    )
}