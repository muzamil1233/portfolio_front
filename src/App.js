import React from 'react'
import {Navbar,Header,About,Footer,Skills, Blog,Work} from "./container/container"
import "./App.scss";


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Work/>
      <Skills/>
      {/* <About/> */}
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App