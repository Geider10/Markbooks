import { NavLink,Link } from "react-router-dom";
function Header() {
    return (
        <header className="flex justify-between items-center px-4 py-2 bg-zinc-900 border-zinc-600 border">
            <div>
                <Link to="/"><img src="vite.svg" alt="logo"  className="h-8 inline-block mr-2"/></Link>
                <h1 className="inline-block">Link Box</h1>
            </div>
            <nav className="flex gap-2 justify-center">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : "link"} >Home</NavLink>
                <NavLink to="/Board" className={({ isActive }) => isActive ? "active" : "link"} >Servicios</NavLink>
                {/* <NavLink to="/Graficos" className={({ isActive }) => isActive ? "active" : "link"} >Gráficos</NavLink> */}
            </nav>
        </header>
    )
}
export default Header;