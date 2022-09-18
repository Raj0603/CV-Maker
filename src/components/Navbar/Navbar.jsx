import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import randomQuote from "./quo.jsx";

import "./Navbar.css";
import "./Hm.css";
import Contact from "../../pages/Contact/Contact.jsx";

import img1 from "../../assets/Slidebar/sb1.png"
import img2 from "../../assets/Slidebar/sb2.png"
import img3 from "../../assets/Slidebar/sb4.svg"
import img4 from "../../assets/Slidebar/sb5.png"
import img5 from "../../assets/Slidebar/sb6.png"





function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<><>
			<header className="header">
				<h3>LOGO</h3>
				<nav className="nav" ref={navRef}>
					<a className="a" href="/#">Home</a>
					<a className="a" href="/#">Build CV</a>
				
					<Link className="a" to="/Contact">	
						Contact Us</Link>
					<a className="a" href="/#">About Us</a>
					<div className="aaa" style={{ marginLeft: "580px" }}>
						<a className="a"><Link className="a" to="/Signup"><FaUser /> Login/Register</Link></a>

					</div>




					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				<button className="nav-btn" onClick={showNavbar}>
					<FaBars />
				</button>



			</header>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div>
				<header class="jumbotron27 jumbotron-fluid">
					<div class="container-fluid text-center">
						<h1 class="display-3">The Best Solution for Your Career Establishment </h1><br />
				
					</div>
					<div class="card-footer text-muted">



						<h2 style={{textAlign:"left" , marginLeft:"100px"}}>Momentary Quote</h2>

						<div className="container165 text-center" >
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



				</header>

				{/* // Slidebar */}

				<div className="container23">
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
				{/* 
   // end */}

			</div>

			<br />

			{/* // Slider image roller baller */}

		</><br />
		
		<div class="card text-center" style={{ marginbottom: "0px" }}>

				<header class="jumbotron27 jumbotron-fluid">
					<div class="container-fluid text-center">
						<p class="lead pb-4">We help you maximize Your Static performance and build a healthy Resume</p>
						<br /><hr /><br />
						<p><a href="#" class="button111" role="button">Start Building</a></p>
					</div>

					</header>

			</div>
			<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			
			</>







	);
}

export default Navbar;

