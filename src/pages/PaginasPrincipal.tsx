import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Project from "./Project";
import Footer from "../components/footer/Footer";
import { InicioButton } from "../components/button/InicioButton";

const PaginasPrincipal = () => {
  return (
    <>
      <main className='w-full h-full'>
        <Navbar />
        <div className='space-y-10 flex flex-col items-center '>
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
        </div>
      </main>
      <Footer />
      <InicioButton />
    </>
  );
};

export default PaginasPrincipal;
