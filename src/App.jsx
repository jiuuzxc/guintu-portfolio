import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Background from "./components/Background"
import Hero from "./components/Hero"
import Experiences from "./components/Experiences"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

const App = () => {
  
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  
  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Background theme={theme} setTheme={setTheme}/>
      <Hero/>
      <Experiences/>
      <Education/>
      <Projects/>
      <Certifications/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
