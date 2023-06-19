
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
 
  return (

      <div className="h-[30px] z-40 bg-black p-5  fixed mx-auto bottom-10  flex justify-center items-center gap-3">
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/experience'>Experience</Link>
    <Link to='/services'>Services</Link>
    <Link to='/testimonial'>Testimonial</Link>
    <Link to='/contact'>Contact</Link>
       
      </div>
   
  );
};

export default Navbar;
