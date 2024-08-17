import Path from "../form/Path"
import Star from "../../../icons/Star";
function Site (data){
    const {value,url,category, id, star,img} = data
    const backCard = img ? { backgroundImage: `url(${img})` } : { backgroundColor: 'blue' };
    return(
        <article className="w-52 text-md rounded-md border-2">
            <div className="h-24 flex justify-between items-start px-2 py-1 bg-cover bg-center" style={backCard} >
                <span className=" bg-slate-600 rounded-xl p-1 text-xs inline">{category}</span>
                <Star sId={id} starValue={star}/>
            </div>
            <div className="text-center bg-gray-600 pb-2">
                <h3>{value}</h3>
                <div className="flex justify-center gap-2">
                    <Path path={url} name={"Ir"} tipo={"blank"} style={"bg-green-600 px-2 inline-block rounded-md"}/>
                    <Path path={`/link/${id}`} name={"Detalles"} style={" px-2 inline-block rounded-md border"}/>
                </div>

            </div>
        </article>
    )
}
export default Site;