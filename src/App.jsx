// import logo from './logo.svg';
import './App.css';

// import Signup from "./components/SignUp/Signup"
import {useEffect} from "react"
import {gapi} from "gapi-script"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';


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
    <div className="App">
  

<Home/>

      {/* <Routes>
        <Route path="/" element={<Home />}>
   
          <Route path="Signup" element={<Signup />} />
          <Route path="Home" element={<Home />} />
        
        </Route>
      </Routes>
       */}


    </div>
  );
}

export default App;
