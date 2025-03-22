import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDash from "./pages/UserDash";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Login/>}/>
          <Route path="/register" element= {<Register/>}/>
          <Route path="/user-dash" element= {<UserDash/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;