import Button from "./Button";
function Modal({ name, children, text, submit, close, change, btnName, url }) {
    return (
        <article className="modalCenter">
            <form onSubmit={(e) => e.preventDefault()} className="w-80 border p-2">
                <div className="flex justify-between mb-2">
                    <h3>{name}</h3>
                    <span onClick={close} className="cursor-pointer "> X</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <input
                        type="text"
                        value={text}
                        onChange={change}
                        placeholder="Ingresa el nombre:"
                        className="inputText" />
                    {url&&
                    <input
                        type="text"
                        placeholder="Ingresa la url:"
                        className="inputText"
                    />
                    }
                    <div className="flex gap-2">
                        <Button name={btnName} style="bg-blue-400" click={submit} />
                        {children}
                    </div>
                </div>
            </form>
        </article>
    )
}
export default Modal;