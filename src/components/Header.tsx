import { NavLink } from "react-router"

export default function Header() {
    return (
        <header>
            <h1>Header</h1>
            <nav>
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/farm">Farm</NavLink>
                <NavLink to="/stats">Stats</NavLink>
            </nav>
        </header>
    )
}