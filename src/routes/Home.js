import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HeroImage from '../assets/heroCover.jpg';
import Trip from "../components/Trip";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        src= {HeroImage}
        title = "Your Journery Your Story"
        text = 'ခရီးသွားရင်း အမှတ်တရများစွာ ဖန်တီးလိုက်ပါ'
        buttonText = "Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
        
        
        
    );
}

export default Home;