import Button from "./Button";

function Modal({ name, children, text, submit, close, change, btnName, url, nameUrl, changeUrl, nameDescription, changeDescription}) {
    return (
        <article className="modalCenter bg-gray-600 px-4 py-3 rounded-lg">
            <form>
                <div className="flex justify-between mb-2">
                    <h3>{name}</h3>
                    <span onClick={close} className="cursor-pointer "> X</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <input
                        type="text"
                        value={text}
                        onChange={change}
                        placeholder="Ingresar nombre"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    {url &&
                        <input
                        type="text"
                        value={nameUrl}
                        onChange={changeUrl}
                        placeholder="Ingresar url"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    }
                    {url &&
                        <input
                        type="text"
                        value={nameDescription}
                        onChange={changeDescription}
                        placeholder="Ingresar descripción"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    }
                    <div className="flex gap-2 justify-center ">
                        <Button name={btnName} style={"bg-green-500"} click={submit} />
                        {children}
                    </div>
                </div>
            </form>
        </article>
    )
}
export default Modal;