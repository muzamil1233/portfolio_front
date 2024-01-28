import React from 'react'
import {Navbar,Header,About,Footer,Skills, Testimonial,Work} from "./container/container"
import "./App.scss";


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App