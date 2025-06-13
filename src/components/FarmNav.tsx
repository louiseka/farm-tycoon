import { NavLink } from "react-router-dom"

export default function FarmNav() {
    return (
        <nav className="nested-nav">
            <NavLink to="/farm/crops"><span><img className="nav-icon" src="../assets/Icons/crops.svg" alt="Graphic of a vegetable patch."></img></span>Crops</NavLink>
            <NavLink to="/farm/animals"><span><img className="nav-icon" src="../assets/Icons/animals.svg" alt="Graphic of a farmer pulling a trailer of farm animals with his tractor."></img></span>Animals</NavLink>
        </nav>
    )
}