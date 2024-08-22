import {useContext, useState} from 'react';
import {FilterContext} from '../../../../context/dataContext';
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
        <div className='text-center h-full'>
            <div className='text-center h-[85%]'>
                <img className='container_img_perfil' src={image || "/photoUpload.webp"} alt={image ? 'Imagen cargada desde el dispositivo':'No hay imagen cargada'}></img>
            </div>
            <div className='relative inline-block mt-2'>
                <label htmlFor="file-input" className='custom_file_label'>Subir imagen </label>
                <input id="file-input" type="file" accept="image/*"  onChange={(e)=> handleImgUpload(e)}/>
            </div>
        </div>
    )
}
export default ImageUpload