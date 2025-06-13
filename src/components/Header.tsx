import { NavLink } from "react-router"

export default function Header() {
    return (
        <header>

            <nav className="main-nav" aria-label="Farm Tycoon navigation">
                <NavLink to="/"><img className="nav-icon" src="../assets/Icons/farmer-icon.svg" alt="Graphic of a old man farmer." aria-hidden="true"></img>Dashboard</NavLink>
                <NavLink to="/shop"><img className="nav-icon" src="../assets/Icons/shop-icon.svg" alt="Graphic of a shopping trolley." aria-hidden="true"></img>Shop</NavLink>
                <NavLink to="/farm"><img className="nav-icon" src="../assets/Icons/farm-icon.svg" alt="A graphic of a farm barn." aria-hidden="true"></img>Farm</NavLink>
                <NavLink to="/stats"><img className="nav-icon" src="../assets/Icons/lightbulb-icon.svg" alt="A graphic of a switched on light bulb." aria-hidden="true"></img>Stats</NavLink>
            </nav>
        </header>
    )
}