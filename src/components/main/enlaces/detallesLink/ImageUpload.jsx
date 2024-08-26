import {useContext, useState} from 'react';
import {FilterContext} from '../../../../context/dataContext';
import Upload from '../../../../icons/Upload';
function ImageUpload ({imgId,imgValue}){
    const {changeImage} = useContext(FilterContext)
    const [image,setImage] = useState(imgValue)

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
    };
    const handleImgUpload = async (e)=>{
        e.preventDefault()
        const file = e.target.files[0]
        const imgValue = await convertToBase64(file)
        console.log(imgValue);
        setImage(imgValue)
        changeImage(imgId, imgValue)
    }   
    return (
        <div className='text-center h-full sm:h-[150px]'>
            <div className=' h-[80%] sm:h-[75%]'>
                <img className='h-full w-full' src={image || "/photoUpload.webp"} alt={image ? 'Imagen cargada desde el dispositivo':'No hay imagen cargada'}></img>
            </div>
            <div className=' mt-2 h-auto inline-flex justify-center items-center border-2 px-2 rounded-md gap-1  cursor-pointer'>
                <label htmlFor="file-input" className=' cursor-pointer'>Imagen</label>
                <Upload/>
                <input id="file-input" type="file" accept="image/*"  onChange={(e)=> handleImgUpload(e)}/>
            </div>
        </div>
    )
}
export default ImageUpload