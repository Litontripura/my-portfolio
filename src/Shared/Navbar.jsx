import "./Nav.css";
import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("#");
  return (
    <nav className="flex gap-3 ">
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <FaHome></FaHome>
      </a>

      <a href="#about" onClick={() => setActive("about")}
        className={active === "about" ? "active" : ""}>about</a>
      <a href="#experience" onClick={() => setActive("experience")}
        className={active === "experience" ? "active" : ""}>experience</a>
      <a href="#service" onClick={() => setActive("service")}
        className={active === "service" ? "active" : ""}>service</a>
      <a href="#testimonial"  onClick={() => setActive("testimonial")}
        className={active === "testimonial" ? "active" : ""}>testimonial</a>
      <a href="#contact"  onClick={() => setActive("contact")}
        className={active === "contact" ? "active" : ""}>Contact</a>
    </nav>
  );
};

export default Navbar;
