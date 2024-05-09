function Button ({name,event,style}) {
    return <button onClick={event} className={`rounded-md p-1 ${style}`}>{name}</button>
}
export default Button;