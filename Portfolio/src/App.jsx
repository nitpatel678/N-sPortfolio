import { useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Skills/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App