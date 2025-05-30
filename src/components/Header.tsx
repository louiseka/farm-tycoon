import { NavLink } from "react-router"

export default function Header() {
    return (
        <header>
            <h1> Farm Tycoon</h1>
            <nav>
                <NavLink to="/"><span><img className="nav-icon" src="src/assets/farmer-icon.svg" alt="Graphic of a old man farmer."></img></span>Dashboard</NavLink>
                <NavLink to="/shop"><span><img className="nav-icon" src="src/assets/shop-icon.svg" alt="Graphic of a shopping trolley."></img></span>Shop</NavLink>
                <NavLink to="/farm"><span><img className="nav-icon" src="src/assets/farm-icon.svg" alt="A graphic of a farm barn."></img></span>Farm</NavLink>
                <NavLink to="/stats"><span><img className="nav-icon" src="src/assets/lightbulb-icon.svg" alt="A graphic of a switched on light bulb."></img></span>Stats</NavLink>
            </nav>
        </header>
    )
}