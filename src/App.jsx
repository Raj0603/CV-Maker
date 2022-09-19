import './App.css';
import About from "./components/About/About"
 import Signup from './components/SignUp/Signup';
import {useEffect} from "react"
import {gapi} from "gapi-script"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Switch from "react-router-dom"
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Projects from "./components/Projects/Projects";
import Certification from "./components/Certification/Certification";
import Education from "./components/Education/Education";
import Interest from "./components/Interest/Interest";
import Skills from "./components/Skills/Skills";

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
          {/* <Switch> */}

          <Route path='/' element={<Home/>}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Skills' element={<Skills />}></Route>
          <Route path="/PersonalInfo/Skills" element={<Navigate replace to="/Skills" />} />
          <Route path='/Certification' element={<Certification />}></Route>
          <Route path="/Skills/Certification" element={<Navigate replace to="/Certification" />} />
          <Route path='/Projects' element={<Projects />}></Route>
          <Route path="/Certification/Projects" element={<Navigate replace to="/Projects" />} />
          <Route path='/Education' element={<Education />}></Route>
          <Route path="/Projects/Education" element={<Navigate replace to="/Education" />} />
          <Route path='/Interest' element={<Interest />}></Route>
          <Route path="/Education/Interest" element={<Navigate replace to="/Interest" />} />
          <Route path='/PersonalInfo' element={<PersonalInfo />}></Route>
          {/* </Switch> */}


          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </Router>

    

      </div>
      
      </>
  );
}

export default App;
