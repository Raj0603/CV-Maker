import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "./Navbar.css";



import Mid from "../Mid/Mid";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<>
		<header className="header">
			<h3>LOGO</h3>
			<nav className="nav" ref={navRef}>
				<a className="a" href="/#">Home</a>
				<a className="a" href="/#">Build CV</a>
				<a className="a" href="/#">Contact Us</a>
				<a className="a" href="/#">About Us</a>
                <div className="aaa" style={{marginRight:"500px"}}>
				<a className="a" ><Link className="a" to="/Signup"><FaUser/> Login/Register</Link></a>
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
		<br/>
		<br/>
		<br/>   
		<br/>
		<br/>
      <div>
		<header class="jumbotron27 jumbotron-fluid">
				<div class="container-fluid text-center">
					<h1 class="display-3">The Best Solution for Your Business</h1><br/>
					<p class="lead pb-4">We help you maximize Your Static performance and build a healthy Resume</p>
					<hr/><br/>
					<p><a href="#" class="button111" role="button">Start Building</a></p>
				</div>
			</header>
			</div>

			<br/>
			<br/>   
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
	
			<div class="card text-center" style={{ marginbottom: "0px" }}>
				<div class="card-footer text-muted">



					<h2>Bye</h2>

					<div class='container165 text-center' style={{textalign:"center"}}>
						<h3>Momentary Quote</h3>
						<br />

                      
						<Helmet>

							<script isHydrating={true} type="text/javascript"
								src="quo.js" />

						</Helmet>

						<p id='random_quote'>

						</p>
					</div>


				</div>


			</div>




       

		</>
	);
}

export default Navbar;

