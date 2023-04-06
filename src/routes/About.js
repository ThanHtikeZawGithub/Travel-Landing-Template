import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg"

const About = () => {
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        src= {AboutImg}
        title = "About"
        />
        </>   
    );
}

export default About;