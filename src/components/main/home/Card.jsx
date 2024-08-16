import Path from "../form/Path"
import Star from "../../../icons/Star";
function Site (data){
    const {value,url,category, id, star} = data
    return(
        <article className="w-60 text-md rounded-md border-2">
            <div className="bg-red-400 h-16 flex justify-between">
                <span>{category}</span>
                <Star sId={id} starValue={star}/>
            </div>
            <div className="text-center bg-gray-600">
                <h3>{value}</h3>
                <Path path={url} name={"Ver"} tipo={"blank"} style={"bg-green-600 px-2 inline-block rounded-md mb-2"}/>
            </div>
        </article>
    )
}
export default Site;