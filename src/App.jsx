import React from 'react'
import UserData from './UserData'
import ProfileCards from './ProfileCards'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Form from "./Form"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserData/>}> </Route>
      <Route path="/Form" element={<Form/>}> </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App

