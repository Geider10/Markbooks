import{Link} from "react-router-dom"
export const Header = () =>{
    return(
        <header>
            <nav className="flex gap-2 justify-center">
                <Link to="/">Inicio</Link>
                <Link to="/Board">Tablero</Link>
                <Link to="/Board">Estadistica</Link>
            </nav>
        </header>
    )
}