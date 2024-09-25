import Path from '../form/Path';
function Logo (){
    return(
        <div className="flex flex-col items-center mt-14 sm:mt-8">
            <div className="w-[150px] h-[120px] sm:h-[100px] ">
                <img src="/logo_book_2.webp" alt="es un libro antiguo representa el logo de la pagina" className="w-full h-[100%]" />
            </div>
            <h1 className='text-3xl font-bold'>Link.System</h1>
            <p className="text-slate-300/75 text-xl sm:text-center">Almacena tus enlaces valiosos de manera fácil.</p>
            <div className="flex gap-4 mt-2 items-center text-center">
                <Path path={"/enlaces"} name={"Ver enlace"} style={"rounded-md px-2 py-1 backOne text-gray-700"}/>
                <Path path={"/panel"} name={"Guardar enlace"} style={"rounded-md px-2 py-1 border-2"}/>
            </div>
        </div>
        
    )
}
export default Logo;