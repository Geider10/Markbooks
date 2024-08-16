import { NavLink,Link } from "react-router-dom";
function Header() {
    return (
        <header className="flex justify-center items-center px-4 py-2 bg-zinc-900 ">
            {/* <div>
                <Link to="/"><img src="vite.svg" alt="logo"  className="h-8 inline-block mr-2"/></Link>
                <h1 className="inline-block">Link Box</h1>
            </div> */}
            <nav className="flex gap-2 justify-center">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : "link"} >Inicio</NavLink>
                <NavLink to="/panel" className={({ isActive }) => isActive ? "active" : "link"} >Panales</NavLink>
            </nav>
        </header>
    )
}
export default Header;