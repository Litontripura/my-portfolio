import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Header from "../Header/Header";
import About from "../pages/About/About";
import Experience from "../pages/Experience/Experience";
import Services from "../pages/Services/Services";
import Testimonial from "../pages/Testimonial/Testimonial";
import Contact from "../pages/Contact/Contact";
import Footer from "../Shared/Footer";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Header></Header>
        },
        {
            path:'about',
            element:<About></About>
        },
        {
            path:'experience',
            element:<Experience></Experience>
        },
        {
            path:'services',
            element:<Services></Services>
        },
        {
            path:'testimonial',
            element:<Testimonial></Testimonial>
        },
        {
            path:'contact',
            element:<Contact></Contact>
        },
        {
            path:'footer',
            element: <Footer></Footer>
        }


    
      ]
    },
  ]);

  export default router