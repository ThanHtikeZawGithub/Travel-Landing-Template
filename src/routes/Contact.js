import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/contact.jpg"
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        src= {ContactImg}
        title = "Contact"
        />
        <Footer/>
        </>    
    );
}

export default Contact;