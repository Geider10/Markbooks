import { NavLink,Link } from "react-router-dom";
function Header() {
    return (
        <header className="flex justify-center items-center px-4 py-2 bg-zinc-900 ">
            <nav className="flex gap-2 justify-center">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : "link"} >Inicio</NavLink>
                <NavLink to="/enlaces" className={({ isActive }) => isActive ? "active" : "link"} >Enlaces</NavLink>
                <NavLink to="/panel" className={({ isActive }) => isActive ? "active" : "link"} >Panel</NavLink>
            </nav>
        </header>
    )
}
export default Header;