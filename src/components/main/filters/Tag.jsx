function Tag ({name,click,pId}){
    return <span onClick={click} id={pId} className="rounded-md bg-violet-600 px-2">{name}</span>
}
export default Tag;