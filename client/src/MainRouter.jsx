import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Education from './Education.jsx'
import Project from './Project.jsx'
import Services from './Services.jsx'
import { Routes, Route } from "react-router-dom"

export default function MainRouter() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/education" element={<Education />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </div>
  )
}