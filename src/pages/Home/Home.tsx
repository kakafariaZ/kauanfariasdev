import Hero from "./sections/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";


const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
