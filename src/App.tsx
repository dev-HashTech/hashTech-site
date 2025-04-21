import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import AboutSection from "./components/sections/AboutSection";
import TechStackSection from "./components/sections/TechStackSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <Router>
      <Layout>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </Router>
  );
}

export default App;
