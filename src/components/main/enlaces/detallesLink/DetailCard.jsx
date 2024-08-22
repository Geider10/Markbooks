import Star from '../../../../icons/Star';
import ImageUpload from './ImageUpload';
function DetailCard({link}){
    const backColor = {backgroundColor:`${link.color}`}
    return (
        <div className="w-[600px] h-60 flex gap-4 rounded-xl  p-4" style={backColor}>
           <div className="w-[30%] ">
                <ImageUpload imgId={link.id} imgValue={link.img}/>
            </div>
           <div className="w-[70%] ">
                <div className="flex justify-between">
                    <span className=" bg-slate-600 rounded-xl py-1 px-2 text-xs inline-block mb-2">{link.category}</span>
                    <div className='flex gap-1'> 
                        <Star sId={link.id} starValue={link.star}/>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">{link.name}</h2>
                <h3 className="text-xs text-slate-100/70 mb-2">{link.url}</h3>
                <p>{link.description}</p>
                <span className='text-xs text-slate-100/70'>Creación: {link.date}</span>
           </div>
        </div>
    )
}
export default DetailCard