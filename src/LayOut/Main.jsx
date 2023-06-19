
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Header from '../Header/Header';
import About from '../pages/About/About';
import Experience from '../pages/Experience/Experience';
import Services from '../pages/Services/Services';
import Testimonial from '../pages/Testimonial/Testimonial';
import Contact from '../pages/Contact/Contact';
import Footer from '../Shared/Footer';
import { useEffect } from 'react';


const Main = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return (
        <div >
         
        <Navbar></Navbar>
        <Header></Header> 
        <About></About>
        <Experience></Experience>
        <Services></Services>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Outlet></Outlet>
        <Footer></Footer>
          
        
        </div>
    );
};

export default Main;