
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import EventCategories from "../components/EventCategories";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home(){
 return(
  <div>
   <Navbar/>
   <Hero/>
   <About/>
   <EventCategories/>
   <Gallery/>
   <Testimonials/>
   <Footer/>
  </div>
 )
}
