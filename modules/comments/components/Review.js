export default function Review({imgURL, name, text}){
    return(
        <React.Fragment>
            <img src={imgURL}/>
            <h1>{name}</h1>
            <p>{text}</p>
        </React.Fragment>
    )
}