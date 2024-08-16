function DetailCard({link}){
    return (
        <div>
            <h1>{link.name}</h1>
            <p>{link.description}</p>
        </div>
    )
}
export default DetailCard