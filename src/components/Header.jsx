import Path from "./Path"
function Header (){
    return(
        <header>
            <nav className="flex gap-2 justify-center">
                <Path name="Nagegar" path="/"/>
                <Path name="Tablero" path="/board"/>
                <Path name="Metricas" path="/metrics"/>
            </nav>
        </header>
    )
}
export default Header;