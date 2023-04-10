import "./Destination.css";
import DestinationData from "./DestinationData";
import arnanda1 from "../assets/arnanda_2.jpg";
import arnanda2 from "../assets/arnanda_1.jpg";
import shweSiGon1 from '../assets/shwe_si_gon1.jpg'
import shweSiGon2 from '../assets/shwe_si_gon2.jpg'


const Destination = () => {
    return (
        <>
        <div className="destination">
            <h1>Popular Destination in Bagan</h1>
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
        isRight = {true}
        src1={arnanda1}
        src2={arnanda2}
        />
           <DestinationData
        heading="Historical Pagodas, Heritage of Myanmar"
        text="Though Myanmar is home to several exceptional natural and 
        cultural touristic sites, it currently has only one site listed 
        as a World Heritage Site of the UNESCO. However, this single site 
        is formed of three ancient cities, which remains exhibit the ancient 
        Buddhist tradition of Myanmar and its originality."
        src1={shweSiGon1}
        src2={shweSiGon2}
        />
        
        </>
    )
}

export default Destination;