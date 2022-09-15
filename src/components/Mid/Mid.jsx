import "./Mid.css";

import React, {useState} from "react";

function Mid(){
    return(
 

    <div class="container mt-xl-5 mt-lg-5">
      <div class="row pt-xl-5 pt-lg-5 d-sm-flex flex-column-reverse flex-lg-row text-center text-md-start">
        <div class="col-xl-6 col-lg-7 pt-xl-5 mt-xl-5 mt-lg-5">
          <h3 class="h3 fw-semibold opacity-75">
            {/* <!--       TYPED JS       --> */}
            <script src="./API's/txt.js" />
            <span id="typed"></span>
          </h3>

          <h1 class="h1 fw-bold">Find your dream <span class="d-block d-sm-inline gunmetal px-2 text-white rounded">freelance
              job</span> easily</h1>
          <p class="fs-6 fw-medium w-75 width-100-important opacity-75">Freelanco provides facilities for
            freelancers to find their
            jobs. Join
            now to
            become a
            freelancer or find a freelancer to work on your project.</p>
          <a href="#" class="btn medium-candy-apple-red text-white fs-5">Get started</a>
        </div>
        <div class="col-xl-6 col-lg-5 mt-lg-5 position-relative">
          <img src="https://adityawahyuramadhan.github.io/hosted-assets/Freelanco/hero-section-image.png" alt="" class="img-fluid scale-up"/>
          <img src="https://adityawahyuramadhan.github.io/hosted-assets/Freelanco/image-floor.svg" alt="" class="position-absolute locate-floor scale-down" style="z-index: -99;"/>
        </div>
      </div>
    </div>
  

    );
}

export default Mid;