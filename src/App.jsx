import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Tools from "./sections/Tools";
import Design from "./sections/Design";
import Form from "./sections/Form";
import Footer from "./sections/Footer";

const App = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const toolsRef = useRef(null);
  const designRef = useRef(null);
  const formRef = useRef(null);

  // Function to scroll smoothly to a section
  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();

  // Scroll to section if navigated from another page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionMap = {
        home: homeRef,
        project: projectRef,
        experience: experienceRef,
        tools: toolsRef,
        design: designRef,
        form: formRef,
      };

      scrollToSection(sectionMap[location.state.scrollTo]);
    }
  }, [location]);

  return (
    <>
      <Navbar
        onScroll={(section) => {
          const sectionMap = {
            home: homeRef,
            project: projectRef,
            experience: experienceRef,
            tools: toolsRef,
            design: designRef,
            form: formRef,
          };

          scrollToSection(sectionMap[section]);
        }}
      />
      <div ref={homeRef}>
        <Hero />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={toolsRef}>
        <Tools />
      </div>
      <div ref={designRef}>
        <Design />
      </div>
      <div ref={formRef}>
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default App;
