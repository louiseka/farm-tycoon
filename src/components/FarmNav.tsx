import { NavLink } from "react-router-dom"


export default function FarmNav() {
    return (
        <nav className="nested-nav" aria-label="Farm Navigation">
            <NavLink to="/farm/crops" className={({ isActive }) => (isActive ? 'nav-active' : 'nav-unactive')}><img className="nav-icon" src="../assets/Icons/crops.svg" alt="Graphic of a vegetable patch." aria-hidden="true"></img>Crops</NavLink>
            <NavLink to="/farm/animals" className={({ isActive }) => (isActive ? 'nav-active' : 'nav-unactive')}><img className="nav-icon" src="../assets/Icons/animals.svg" alt="Graphic of a farmer pulling a trailer of farm animals with his tractor." aria-hidden="true"></img>Animals</NavLink>
        </nav>

    )
}

