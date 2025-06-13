import { NavLink } from "react-router"

export default function ShopNav() {
    return (
        <nav className="nested-nav">
            <NavLink to="shop/crops"><span><img className="nav-icon" src="../assets/Icons/crops.svg" alt="Graphic of a vegetable patch."></img></span>Crops</NavLink>
            <NavLink to="shop/animals"><span><img className="nav-icon" src="../assets/Icons/animals.svg" alt="Graphic of a farmer pulling a trailer of farm animals with his tractor."></img></span>Animals</NavLink>
        </nav>
    )
}