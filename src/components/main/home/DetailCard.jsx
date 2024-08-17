import Star from '../../../icons/Star';
import ImageUpload from './ImageUpload';
function DetailCard({link}){
    return (
        <div className="w-[600px] h-60 flex gap-4 rounded-md border-2 bg-emerald-900 p-4">
           <div className="w-[30%] ">
                <ImageUpload imgId={link.id} imgValue={link.img}/>
            </div>
           <div className="w-[70%] ">
                <div className="flex justify-between">
                    <label className=" bg-slate-600 rounded-xl p-1 text-xs inline-block mb-2">{link.category}</label>
                    <div className='flex gap-1'> 
                        <Star sId={link.id} starValue={link.star}/>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold">{link.name}</h2>
                <h3 className="text-xs text-slate-200/60 mb-2">{link.url}</h3>
                <p>{link.description}</p>
                <p>{link.date}</p>
           </div>
        </div>
    )
}
export default DetailCard