import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css"
import img1 from "../../assets/Slidebar/sb1.png"
import img2 from "../../assets/Slidebar/sb2.png"
import img3 from "../../assets/Slidebar/sb4.svg"
import img4 from "../../assets/Slidebar/sb5.png"
import img5 from "../../assets/Slidebar/sb6.png"
import randomQuote from "./quo.jsx";
import { Link } from "react-router-dom";


export default function Home() {

	
	return (
		<>
			<Navbar>
			
			</Navbar>
			


			<div className="landing-container">


			<div className="landing-heading">
				<div className="heading-container">
					<h1 className="landing-h1">The Best Solution for Your Career Establishment </h1><br />
					<p className="landing-text" style={{textAlign: "center"}}>We help you maximize Your Static performance and build a healthy Resume</p>
					<br /><br />
					<Link to="/Body" href="#" role="button"><button className="landing-button"> Start Building</button></Link>
				</div>
				<div className="landing-quote">
					<h2 style={{ textAlign: "center", justifyContent: "center" }}>Momentary Quote</h2>

					<div className="quote-container" >
						<h3></h3>
						<br />
						<div className="p4" id='random_quote'>
						 	<script isHydrating={true} type="text/javascript"
								src={randomQuote} />
						</div>

						<div className="p4" id='random_quote'>
							<script isHydrating={true} type="text/javascript"
								src={randomQuote} />
						</div>

						<br />
					</div>
				</div>
			</div>

			<div className="slider">

				<div className="slider-frame">

					<div className="img-container">
						<img className="slider-image" src={img1} alt="" />
					</div>
					<div className="img-container">
						<img className="slider-image" src={img2} alt="" />
					</div>
					<div className="img-container">
						<img className="slider-image" src={img3} alt="" />
					</div>
					<div className="img-container">
						<img className="slider-image" src={img4} alt="" />
					</div>
					<div className="img-container">
						<img className="slider-image" src={img5} alt="" />
					</div>

					<div className="img-container">
						<img className="slider-image" src={img1} alt="" />
					</div>
					<div className="img-container">
						<img className="slider-image" src={img2} alt="" />
					</div>
					<div className="img-container">
						<img className="slider-image" src={img3} alt="" />
					</div>
					<div className="img-container">
						<img className="slider-image" src={img4} alt="" />
					</div>
					<div className="img-container">
						<img className="slider-image" src={img5} alt="" />
					</div>

				</div>

			</div>

			</div>


		</>
	);

}
