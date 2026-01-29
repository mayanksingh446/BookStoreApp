import React from 'react'
import Home from './home/Home'
import Courses from './components/Courses'
import {Routes,Route, Navigate} from "react-router-dom"
import Couress from './course/Couress'
import Signup from './components/Signup'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

const App = () => {
   const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-black">
     {/* <Home/>
     <Courses/> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={authUser?<Couress/>: <Navigate to='/signup'/>} />
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
      <Toaster/>
    </div>
  )
}

export default App
