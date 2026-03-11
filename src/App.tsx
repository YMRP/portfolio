import "./index.css";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { Toaster } from "sonner";
import FadeInSection from "./components/FadeInSection";

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <Header />
      <div
        className="min-h-screen relative flex flex-col  min-w-full "
        style={{
          background: "#000",
        }}
      >
        <Presentation />
        <FadeInSection>
          <Projects />
        </FadeInSection>

        <FadeInSection>
          <Skills />
        </FadeInSection>
        <FadeInSection>
          <AboutMe />
        </FadeInSection>

        <FadeInSection>
          <ContactMe />
        </FadeInSection>
      </div>
      <Footer />
    </>
  );
}

export default App;
