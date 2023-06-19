import "./about.css";
import aboutme from '../../assets/img/aboutme.png'
import AboutCard from "./AboutCard";
import Container from "../../components/Container/Container";

const About = () => {
  return (
   <Container>
     <section id="about" className="background">
      <h1 className="text-5xl text-center">About Me</h1>
      <div className="md:flex items-center justify-evenly">
        <div className="w-full md:w-1/2">
          <img src={aboutme} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <AboutCard />
          <div className="">
            <p>
              Hello! I'm Liton Tripura, a passionate web developer specializing
              in React. I've been actively involved in the field of web
              development since 2020, and it has been an incredible journey so
              far. I love the dynamic nature of web technologies and the ability
              to bring ideas to life through coding.
            </p>
            <p>
              To enhance my skills and stay up-to-date with the latest industry
              practices, I pursued a comprehensive course on web development
              from Programing Hero. This intensive program provided me with a
              solid foundation in React, enabling me to build interactive and
              responsive user interfaces with ease.
            </p>
           <button className="btn btn-primary">Let's talk</button>
          </div>
        </div>
      </div>
    </section>
   </Container>
  );
};

export default About;
