function Button ({name,click,style, read,pId,pUrl,pValue,pCategory}) {
    return <button onClick={click} className={`rounded-md p-1 ${style}`} disabled={read} id={pId}  url={pUrl} value={pValue} category={pCategory} type="submit">{name}</button>
}
export default Button;