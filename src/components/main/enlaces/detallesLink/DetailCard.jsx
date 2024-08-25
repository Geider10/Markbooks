import Star from '../../../../icons/Star';
import ImageUpload from './ImageUpload';
import Path from '../../form/Path';
import ArrowLeft from '../../../../icons/ArrowLeft';
function DetailCard({link}){
    const backColor = {backgroundColor:`${link.color}`}
    return (
        <div>
            <Path name={<ArrowLeft/>} path={'/enlaces'} style='backOne text-gray-700 relative left-4  bottom-2  p-1 rounded-md inline-block'/>
             <div className=" max-w-[600px] h-auto flex gap-4 rounded-xl  p-3 mx-6 sm:flex-col mx-4" style={backColor}>
             <div className="w-[65%] h-full sm:w-full ">
                <div className="flex justify-between">
                    <span className=" bg-slate-600 rounded-xl py-1 px-2 text-xs inline-block mb-2">{link.category}</span>
                    <div className='flex gap-1'> 
                        <Star sId={link.id} starValue={link.star}/>
                    </div>
                </div>
                <h2 className="text-2xl font-bold break-word break-all">{link.name}</h2>
                <p className='text-xs text-slate-100/60 break-word break-all'>{link.url}</p>
                <p className='text-lg break-word break-all sm:text-base'>{link.description}</p>
                 <span className='text-xs text-slate-100/60 sm:hidden'>Creación: {link.date}</span>
            </div>
            <div className="w-[35%] h-full  sm:w-full">
                <ImageUpload imgId={link.id} imgValue={link.img}/>
             </div>
            </div>
        </div>
       
    )
}
export default DetailCard