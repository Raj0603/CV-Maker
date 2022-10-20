import './App.css';
// import About from "./components/About/About"

 import React, { Component, useState } from "react"
 import Signup from './components/SignUp/Signup';
// import {useEffect} from "react"
// import {gapi} from "gapi-script"
// import nodemon  from "nodemon"
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Body from "./components/Body/Body"

const clientId = "416173177198-s29fioc3j8kia1fviqh1j1bbfbldghun.apps.googleusercontent.com"

function App() {

  // const [ user,setLoginUser ] = useState({})
  // useEffect(() => {
  //   function start(){
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     })
  //   };

  //   gapi.load('client:auth2', start)

  // });

  // const user = localStorage.getItem("token");

  return (

    <>

    
    <div className="App">
  
   <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* {user && <Route path="/" exact element={<Home />} />} */}
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Body' element={<Body />}></Route>
      
          </Routes>
      </Router>

           

      </div>
      
      </>
  );
}

export default App;
