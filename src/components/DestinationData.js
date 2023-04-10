import "./Destination.css";

const DestinationData = ({heading,text, isRight, src1, src2}) => {
    return (
        <div className={`${isRight ? 'first-des' :'first-des-reverse'}`} >
        <div className="des-text">
        <h2>{heading}</h2>
        <p>{text}</p>
    </div>
    <div className="image">
        <img alt="img" src={src1}/>
        <img alt="img" src={src2}/>
    </div>
    </div>
    )
}

export default DestinationData;