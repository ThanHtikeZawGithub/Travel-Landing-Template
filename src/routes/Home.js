import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HeroImage from '../assets/heroCover.jpg';


const Home = () => {
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        src= {HeroImage}
        title = "Your Journery Your Story"
        text = 'Choose your favourite destination'
        buttonText = "Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        </>
        
        
        
    );
}

export default Home;