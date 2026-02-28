import "./index.css";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen relative flex flex-col  min-w-full "
        style={{
          background:
            "#00000",
        }}
      >

        <Presentation/>
        <Projects/>
        <Skills/>
        <AboutMe/>
        <ContactMe/>
      
      </div>
      <Footer/>
    </>
  );
}

export default App;
