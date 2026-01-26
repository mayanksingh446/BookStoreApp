import React from 'react'
import Home from './home/Home'
import Courses from './components/Courses'
import {Routes,Route} from "react-router-dom"
import Couress from './course/Couress'
import Signup from './components/Signup'

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-black">
     {/* <Home/>
     <Courses/> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Couress/>} />
      <Route path='/signup' element={<Signup/>}/>
     </Routes>

    </div>
  )
}

export default App
