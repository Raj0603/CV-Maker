// import logo from './logo.svg';
import './App.css';
import Signup from './components/SignUp/Signup';
// import Navbar from './components/Navbar/Navbar'
// import Signup from "./components/SignUp/Signup"
import {useEffect} from "react"
import {gapi} from "gapi-script"

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
      <Signup/>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
