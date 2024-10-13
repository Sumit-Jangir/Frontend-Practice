import React from 'react'
import Data from '../Components/Data'
// import Header from '../Components/Header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import SignUp from '../Components/SignUp'
import SideNav from '../Components/SideNav'
import Header from '../Components/Header'
import Toggle from '../Components/Toggle'

function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Header />
     

     <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/signup" element={<SignUp/>} ></Route>
      <Route path="/items" element={<Data/>} ></Route>
     </Routes>

   
      </BrowserRouter> */}

      <Toggle />
    </div>
  )
}

export default App
