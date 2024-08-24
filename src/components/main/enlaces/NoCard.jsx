function NoCard (){
    return (
        <div className=" px-4 py-3 rounded-lg bg-gray-600 sm:mx-4" >
            <h2>¡Oops!, No se encontro resultados.</h2>
            <p>Agregue un enlace y vuelva a intentarlo.</p>
            <div className="flex justify-center ">
                <div className="w-[100px] h-[100px]">
                    <img src="/yoga_book.webp" alt="Un libro haciendo yoga" className="w-full h-[100%]" />
                </div>
            </div>
        </div>
    )
}
export default NoCard