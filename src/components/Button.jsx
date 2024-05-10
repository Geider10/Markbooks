function Button ({name,click,style}) {
    return <button onClick={click} className={`rounded-md p-1 ${style}`}>{name}</button>
}
export default Button;