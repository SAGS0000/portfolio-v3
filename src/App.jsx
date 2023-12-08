import Navbar from "./components/Navbar";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import SkillSection from "./sections/SkillSection";
import About from "./sections/AboutSection";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="layout">
      {/* <div className="overlay"></div> */}
      <HeroSection />
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<About />}
          />
          <Route
            path="/skills"
            element={<SkillSection />}
          />
          <Route
            path="/contact"
            element={<ContactSection />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;

{
  /* <div className="layout">
  <HeroSection />
  <Navbar />
  <main>
    <Route
      path="/"
      element={<About />}
    />
    <Route
      path="/skills"
      element={<SkillSection />}
    />
    <Route
      path="/contact"
      element={<ContactSection />}
    />
    </main>
</div> */
}
