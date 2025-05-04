import React from 'react'
import Nav from './containers/Nav'
import Home from './containers/Home'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import Footer from './containers/Footer'


const App = () => {
  return (
    <div>
      <Nav/> 
      <Home/> 
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App