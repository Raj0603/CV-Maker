



import "./Navbar.css";


import React, {useState} from "react";

import { Link } from "react-router-dom";

function Nav() {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand fw-bold text-gunmetal" href="#">
                    <span class=""><img src="https://adityawahyuramadhan.github.io/hosted-assets/Freelanco/logo.svg" alt="" class="img-fluid" /></span>
                    Freelanco
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                                {/*                             
                        <Link class="nav-link btn gunmetal text-white fw-medium" to = "/Signup" >
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