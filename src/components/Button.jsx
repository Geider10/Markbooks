function Button ({name,click,style, read}) {
    return <button onClick={click} className={`rounded-md p-1 ${style}`} disabled={read}>{name}</button>
}
export default Button;