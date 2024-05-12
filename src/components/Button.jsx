function Button ({name,click,style, read,pId,pUrl,pValue}) {
    return <button type="submit" onClick={click} className={`rounded-md p-1 ${style}`} disabled={read} id={pId}  url={pUrl} value={pValue}>{name}</button>
}
export default Button;