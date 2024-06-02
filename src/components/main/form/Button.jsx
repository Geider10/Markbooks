function Button ({name,click,style,pId,pUrl,pValue,pCategory}) {
    return <button onClick={click} className={`rounded-md p-1 ${style}`} id={pId}  url={pUrl} value={pValue} category={pCategory} type="submit">{name}</button>
}
export default Button;