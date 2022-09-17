// import logo from './logo.svg';
import './App.css';
import About from "./components/About/About"
 import Signup from './components/SignUp/Signup';
import Navbar from './components/Navbar/Navbar'
// import Signup from "./components/SignUp/Signup"
import {useEffect} from "react"
import {gapi} from "gapi-script"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Skills from "../src/Skills/Skills"

const clientId = "416173177198-s29fioc3j8kia1fviqh1j1bbfbldghun.apps.googleusercontent.com"

function App() {

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start)

  });

  return (

    <>

    
    <div className="App">
  
   <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>

        </Routes>
  
      </Router>

    

      </div>
      
      </>
  );
}

export default App;
