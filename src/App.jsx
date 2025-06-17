import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services.jsx"
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from "./components/testimonials/Testimonials.jsx"
import Contacts from "./components/contacts/Contacts.jsx"
import Footer from "./components/footer/Footer.jsx"
const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
