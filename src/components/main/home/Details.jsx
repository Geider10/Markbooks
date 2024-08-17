import Path from "../form/Path";
function Details (){
    return(
        <div className="text-center my-24">
           <h2 className="text-4xl font-extrabold"> Dale valor a tus enlaces,<br />
            guardalos y evita perderlos.</h2>
            <p className="text-slate-300/75 text-md">Almacena los links y gestiona como los usas.</p>
            <div  className="flex gap-4 justify-center mt-4">
                <Path path={"/Board"} name={"Explorar"} style={"backOne px-2 py-1 rounded-md text-gray-700"}/>
            </div>
        </div>
        
    )
}
export default Details;