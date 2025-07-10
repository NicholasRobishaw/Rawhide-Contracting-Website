import '../App.css'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import WhyChooseUs from '../components/whyChooseUs.jsx'
import AboutUsServices from '../components/AboutUsServices.jsx'
import GetStarted from '../components/GetStarted.jsx'
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    return(
        <div className="min-h-screen overflow-x-hidden">
            <Hero></Hero>
            <WhyChooseUs></WhyChooseUs>
            <AboutUsServices></AboutUsServices>
            <GetStarted></GetStarted>
        </div>
    )
}