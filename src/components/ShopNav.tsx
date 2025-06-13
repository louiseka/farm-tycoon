import { NavLink } from "react-router"

export default function ShopNav() {
    return (
        <nav className="nested-nav" aria-label="Shop navigation">
            <NavLink to="shop/crops"><img className="nav-icon" src="../assets/Icons/crops.svg" alt="Graphic of a vegetable patch." aria-hidden="true"></img>Crops</NavLink>
            <NavLink to="shop/animals"><img className="nav-icon" src="../assets/Icons/animals.svg" alt="Graphic of a farmer pulling a trailer of farm animals with his tractor." aria-hidden="true"></img>Animals</NavLink>
        </nav>
    )
}