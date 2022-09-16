



//import  Styles  from "./Navbar.module.css";


import React, {useState} from "react";

import { Link } from "react-router-dom";

function Nav() {
    return(
        <>
        <nav className= {`${Styles.navbar} ${Styles.navbar-expand-lg} ${Styles.navbar-light}`}>
            <div className={Styles.container}>
                <a className={`${Styles.navbar-brand} ${Styles.fw-bold} ${Styles.text-gunmetal}`} href="#">
                    <span className=""><img src="https://adityawahyuramadhan.github.io/hosted-assets/Freelanco/logo.svg" alt="" className="img-fluid" /></span>
                    Freelanco
                </a>
                <button className={`${Styles.navbar-toggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`${Styles.navbar-toggler-icon}`}></span>
                </button>
                <div className={`${collapse} ${Styles.navbar-collapse}`} id="navbarNav">
                    <ul className={`${Styles.navbar-nav} ms-auto mb-2 mb-lg-0 fw-medium`}>
                        <li className={Styles.nav-item}>
                            <a className={`${Styles.nav-link} ${Styles.active}`} aria-current="page" href="#">Home</a>
                        </li>
                        <li className={Styles.nav-item}>
                            <a className={Styles.nav-link} href="#">Pricing</a>
                        </li>
                        <li className={Styles.nav-item}>
                            <a className={Styles.nav-link} href="#">Services</a>
                        </li>
                        <li className={Styles.nav-item}>
                            <a className={Styles.nav-link} href="#">Blog</a>
                        </li>
                        <li className={Styles.nav-item}>
                            <a className={Styles.nav-link} href="#">Contact</a>
                        </li>
                        <li className={Styles.nav-item}>
                                {/*                             
                        <Link className="nav-link btn gunmetal text-white fw-medium" to = "/Signup" >
                              Login
                              </Link> */}

                        </li>
                    </ul>
                </div>
            </div>



        </nav>
           


            </>


    );
}


export default Nav;