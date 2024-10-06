function NoCard ({title, subtititle, img}){
    return (
        <div className=" px-4 py-3 rounded-lg bg-gray-600 sm:mx-4" >
            <h2>{title}</h2>
            <p>{subtititle}</p>
            <div className="flex justify-center ">
                <div className="w-[120px] h-[120px]">
                    <img src={img} alt="Un libro haciendo yoga" className="w-full h-[100%]" />
                </div>
            </div>
        </div>
    )
}
export default NoCard