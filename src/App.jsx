import { useRef } from "react"
import Navbar from "./components/Navbar"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Project from "./sections/Project"
import Tools from "./sections/Tools"
import Design from "./sections/Design"
import Form from "./sections/Form"
import Footer from "./sections/Footer"


const App = () => {
  // create refs for each section

  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const toolsRef = useRef(null);
  const designRef = useRef(null);
  const formRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior:'smooth' });
  }
  return (
    <>
       <Navbar
        onScroll={(section) => {
          if (section === 'home') {
            scrollToSection(homeRef);
          } else if (section === 'project') {
            scrollToSection(projectRef);
          } else if (section === 'experience') {
            scrollToSection(experienceRef);
          } else if (section === 'tools') {
            scrollToSection(toolsRef);
          } else if (section === 'design') {
            scrollToSection(designRef);
          } else if (section === 'form') {
            scrollToSection(formRef);
          } 
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
  )
}

export default App