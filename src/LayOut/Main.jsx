

import Navbar from '../Shared/Navbar';
import Header from '../Header/Header';
import About from '../pages/About/About';
import Experience from '../pages/Experience/Experience';
import Services from '../pages/Services/Services';
import Testimonial from '../pages/Testimonial/Testimonial';
import Contact from '../pages/Contact/Contact';
import Footer from '../Shared/Footer';
import Portfolio from '../pages/PortFolio/Portfolio';



const Main = () => {
  
    return (
        <div >
       
       <Navbar></Navbar>
        <Header></Header> 
       
        <About></About>
        <Experience></Experience>
        <Services></Services>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <Footer></Footer>
          
        
        </div>
    );
};

export default Main;