import "./Mid.css";

import React, {useState} from "react";

function Mid(){
    return(
 

      <div class="card text-center" style={{ marginbottom: "0px" }}>
      <div class="card-footer text-muted">



        <h2>Bye</h2>

        <div class='container165 text-center' style={{textalign:"center"}}>
          <h3>Momentary Quote</h3>
          <br />

                    
          <Helmet>

            <script isHydrating={true} type="text/javascript"
              src="quo.jsx" />

          </Helmet>

          <p id='random_quote'>

          </p>
        </div>


      </div>


    </div>



  

    );
}

export default Mid;