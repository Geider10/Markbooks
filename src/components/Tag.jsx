function Tag ({name,click,pId}){
    return <span onClick={click} id={pId} className="rounded-md bg-violet-600">{name}</span>
}
export default Tag;