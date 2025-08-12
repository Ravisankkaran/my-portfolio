import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/ContactPage";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import ScrollToTopButton from "./components/ScrollToTopButton";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Works />
      <ContactPage />
      <ScrollToTopButton />
    </>
  );
}

export default App;
