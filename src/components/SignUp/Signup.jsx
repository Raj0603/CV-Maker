import "./Signup.css"
import login from "../../assets/Signup/log.svg"
import Signin from "../../assets/Signup/sign.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGoogle, faLinkedinIn, } from "@fortawesome/free-brands-svg-icons"
// import {faLock, faUser, faEnvelope, } from "@fortawesome/free-solid-svg-icons"
import {GoogleLogin} from "react-google-login"
import React, {useState} from "react"


const clientId = "416173177198-s29fioc3j8kia1fviqh1j1bbfbldghun.apps.googleusercontent.com"

function Signup() {

    setTimeout(ST, 10)
    function ST() {

        const sign_in_btn = document.getElementById("sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");
    
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });
    
        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
    }

    const onSuccess = (res) => {
        console.log("Login Success! Current user: ", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("Login Failed! res: ", res)
    }

    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            {/* <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faFacebookF} /> */}
                            {/* </a> */}
                            <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faGoogle} />
                            <GoogleLogin
                                clientId={clientId}
                                buttonText="Login"
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={"single_host_origin"}
                                isSignedIn={true}
                            />
                            </a>
                            <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" className="btn" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faGoogle} />
                            
                            </a>
                            <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent" id="sign-up-btn">
                            Sign up
                        </button>
                    </div>
                    <img src={login
                    
                    } className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className="btn transparent" id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src={Signin} className="image" alt="" />
                </div>
            </div>
        </div>
    )

   
}

export default Signup