import Path from "../form/Path"
import Star from "../../../icons/Star";
function Site (data){
    const {value,url,category, id, star,img,color} = data
    const backCard = img ? { backgroundImage: `url(${img})` } : { backgroundColor: `${color}` };
    return(
        <article className="w-52 text-md border-2 rounded-md border-gray-400 hover:border-white">
            <div className="h-24 flex justify-between items-start px-2 py-1 bg-cover bg-center" style={backCard} >
                <span className="  bg-gray-600 rounded-xl py-1 px-2 text-xs inline">{category}</span>
                <Star sId={id} starValue={star}/>
            </div>
            <div className="text-center bg-gray-600 pb-2">
                <h3 className="font-medium" >{value}</h3>
                <div className="flex justify-center gap-2 mt-1">
                    <Path path={url} name={"Ir"} tipo={"blank"} style={"backOne px-2 inline-block rounded-md text-gray-700"}/>
                    <Path path={`/link/${id}`} name={"Detalles"} style={" px-2 inline-block rounded-md border"}/>
                </div>
            </div>
        </article>
    )
}
export default Site;