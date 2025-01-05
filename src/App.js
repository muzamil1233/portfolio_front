import React from 'react'
import {Navbar,Header,About,Footer,Skills, Blog,Work} from "./container/container"
import "./App.scss";

//called from index.js this is the container of the main app
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Work/>
      <Skills/>
      <About/>
      {/* <Blog/> */}
      <Footer/>
    </div>
  )
}

export default App