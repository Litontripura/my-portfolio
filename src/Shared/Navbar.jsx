import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";


import "./Nav.css";

const Navbar = () => {
  const [active, setActive] = useState("#");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="toggle-button bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={toggleNavbar}
      >
       
      </button>

      <nav
        className={`flex gap-3 bottom-2 ${
          isOpen ? "block" : "hidden lg:flex md:flex-row sm:flex-col-reverse"
        }`}
      >
        <a
          href="#"
          onClick={() => setActive("#")}
          className={`${
            active === "#" ? "bg-blue-500 text-white" : "text-blue-500"
          } flex items-center gap-1 px-2 py-1 rounded-md`}
        >
          <FaHome />
        </a>

        <a
          href="#about"
          onClick={() => setActive("about")}
          className={`${
            active === "about" ? "bg-blue-500 text-white" : "text-blue-500"
          } flex items-center gap-1 px-2 py-1 rounded-md`}
        >
          <SiAboutdotme className="text-2xl" />
        </a>

        <a
          href="#experience"
          onClick={() => setActive("experience")}
          className={`${
            active === "experience" ? "bg-blue-500 text-white" : "text-blue-500"
          }`}
        >
          experience
        </a>
        <a
          href="#service"
          onClick={() => setActive("service")}
          className={`${
            active === "service" ? "bg-blue-500 text-white" : "text-blue-500"
          }`}
        >
          service
        </a>
        <a
          href="#testimonial"
          onClick={() => setActive("testimonial")}
          className={`${
            active === "testimonial" ? "bg-blue-500 text-white" : "text-blue-500"
          }`}
        >
          testimonial
        </a>
        <a
          href="#contact"
          onClick={() => setActive("contact")}
          className={`${
            active === "contact" ? "bg-blue-500 text-white" : "text-blue-500"
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
