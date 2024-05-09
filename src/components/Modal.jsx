import Button from "./Button";
function Modal ({event}) {
    return (
        <article>
            <form onSubmit={(e)=> e.preventDefault()} className="w-80 border p-2">
                <div className="flex justify-between mb-2">
                    <h3>Nuevo sitio</h3>
                    <span onClick={event} className="cursor-pointer "> X</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                <input type="text"  placeholder="Ingresa nombre"  className="inputText"/>
                <input type="url" placeholder="Ingresa el Url" className="inputText"/>
                <input 
                type="file"
                accept="image/jpg, image/jpeg, image/png" />
                <Button name="Cargar" style="bg-blue-400"/>
                </div>
            </form>
        </article>
    )
}
export default Modal;