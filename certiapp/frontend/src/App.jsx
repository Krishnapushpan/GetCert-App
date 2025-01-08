import React,{useState} from 'react'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/signup.jsx'
import Frontpage from './components/frontpage.jsx' 
import Issuecerti from './components/issuecerti.jsx'
import Viewcertificate  from './components/viewcertificate.jsx'
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/frontpage"  element={<Frontpage />} />
      <Route path="/issuecerti" element={<Issuecerti />} />
      <Route path="/viewcertificate" element={<Viewcertificate  />} />
      </>
    )
  )
  return (
  
    <RouterProvider router={router} />
  )
}

export default App