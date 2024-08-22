import { NavLink } from "react-router-dom";
function Header() {
    return (
        <header className="flex justify-center items-center py-2 text-lg font-semibold bg-zinc-900 ">
            <nav className="flex gap-4 justify-center">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : "link"} >Inicio</NavLink>
                <NavLink to="/enlaces" className={({ isActive }) => isActive ? "active" : "link"} >Enlaces</NavLink>
                <NavLink to="/panel" className={({ isActive }) => isActive ? "active" : "link"} >Panel</NavLink>
            </nav>
        </header>
    )
}
export default Header;