import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/2.jpg"

const Contact = () => {
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        src= {ContactImg}
        title = "Contact"
        />
        </>    
    );
}

export default Contact;