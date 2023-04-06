import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/1.jpg"

const Service = () => {
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        src= {ServiceImg}
        title = "Service" 
        />
        </>        
    );
}

export default Service;