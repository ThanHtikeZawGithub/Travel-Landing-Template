import "./Destination.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/3.jpg";
import Mountain3 from "../assets/4.jpg";
import Mountain4 from "../assets/5.jpg";

const DestinationData = ({heading,text}) => {
    return (
        <div className="first-des">
        <div className="des-text">
        <h2>{heading}</h2>
        <p>{text}</p>
    </div>
    <div className="image">
        <img alt="img" src={Mountain1}/>
        <img alt="img" src={Mountain2}/>
    </div>
    </div>
    )
}

export default DestinationData;