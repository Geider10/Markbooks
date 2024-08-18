import Plus from '../../../icons/Plus';
function SelectTable ({hLinks, hCategorys, hModalOn}){
    return(
        <div className="flex  justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <span onClick={hLinks} className="tableLink tableLinkActive">Links</span>
                    <span>|</span>
                    <span onClick={hCategorys} className="tableLink">Categorias</span>
                </div>
                <span className='bg-green-500 rounded-md p-1'>
                    <Plus click={hModalOn}/> 
                </span>
               
        </div >
    )
}
export default SelectTable