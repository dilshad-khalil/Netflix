import React from 'react'
import Navbar from './Components/Navbar'
import {Route , Routes } from 'react-router-dom'
import Home from './Components/pages/Home'
import { AuthContextProvider } from './Components/context/AuthContext'
import Login from './Components/pages/Login'
import SignUp from './Components/pages/SignUp'
import Account from './Components/pages/Account'
import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {
  return (
    <>
      <AuthContextProvider>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/account' element={
            <ProtectedRoute>
               <Account />
            </ProtectedRoute>
           } />
      </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App