import Path from '../form/Path';
function Logo (){
    return(
        <div className="flex flex-col items-center mt-16">
            <div className="w-[200px] h-[200px]">
                <img src="/logo_book.webp" alt="es un libro antiguo representa el logo de la pagina" className="w-full" />
            </div>
            <p className="text-slate-300/75 text-xl">Almacena tus enlaces valiosos de manera fácil.</p>
            <div className="flex gap-4 mt-2 items-center">
                <Path path={"/enlaces"} name={"Ver enlace"} style={"rounded-md px-2 py-1 backOne text-gray-700"}/>
                <Path path={"/panel"} name={"Guardar enlace"} style={"rounded-md px-2 py-1 border-2"}/>
            </div>
        </div>
        
    )
}
export default Logo;