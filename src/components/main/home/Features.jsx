function Features (){
    return(
       <div className="flex justify-center mt-10 ">
            <div className="w-[600px] h-auto flex justify-center rounded-xl border-2 p-2 font-bold text-lg sm:border-0">
                <div className="w-[65%] sm:w-[100%] flex gap-2 flex-col">
                    <p className="sm:border-2 rounded-md px-1">Acceso rapido</p>
                    <p className="sm:border-2 rounded-md px-1">Acceso desde cualquier dispositivo</p>
                    <p className="sm:border-2 rounded-md px-1">Gestiona a traves de categorías</p>
                    <p className="sm:border-2 rounded-md px-1">Descarga los enlaces en PDF</p>
                    <p className="sm:border-2 rounded-md px-1">Alamacenamineto seguro y permanente</p>
                </div>
                <div className="w-[30%] sm:hidden">
                    <img src="/tools.webp" alt="set de herramienta productivas" className="w-full h-full"/>
                </div>
            </div>
           
       </div>
    )
}
export default Features