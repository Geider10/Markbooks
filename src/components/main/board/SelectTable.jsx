import Plus from '../../../icons/Plus';
function SelectTable ({hLinks, hCategorys, hModalOn}){
    return(
        <div className="flex gap-x-28 items-center mb-4 sm:gap-x-14">
                <div className=" flex gap-x-2">
                        <span onClick={hLinks} className="tableLink tableLinkActive">Links</span>
                        <span>|</span>
                        <span onClick={hCategorys} className="tableLink">Categorias</span>
                </div>
                <span className='bg-green-500 rounded-md p-1 inline-block'>
                    <Plus click={hModalOn}/> 
                </span>
               
        </div >
    )
}
export default SelectTable