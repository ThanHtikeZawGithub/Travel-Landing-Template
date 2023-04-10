import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/service.jpg"
import Footer from "../components/Footer";
import Trip from '../components/Trip'

const Service = () => {
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        src= {ServiceImg}
        title = "Service" 
        />
        <Trip/>
        <Footer/>
        </>        
    );
}

export default Service;