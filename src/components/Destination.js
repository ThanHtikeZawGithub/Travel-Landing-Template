import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/3.jpg";
import Mountain3 from "../assets/4.jpg";
import Mountain4 from "../assets/5.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";


const Destination = () => {
    return (
        <>
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to travel</p>
        </div>
        <DestinationData
        heading="Bagan ,Ancient Temples and Pagodas"
        text="One of the most iconic views in Myanmar boosts many 
        ancient Temples around the city. If you fancy a closer
        look, the hike up to the crater is a mere 45minutes, and is 
        easy enough for beginners.Guides will assist you most of 
        the way and you'll see the peculiar environment found On
        an active volcano,including volcanic rocks and steam vents."
        />
        </>
    )
}

export default Destination;