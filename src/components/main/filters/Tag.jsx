function Tag ({name,click,pId,style}){
    return <span onClick={click} id={pId} className={style}>{name}</span>
}
export default Tag;