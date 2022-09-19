import React from "react";

import "./Navbar.css";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";



import "./Navbar.css";
import "./Hm.css";






export default function NavbarA() {
        
    	
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
			

			<br />

			{/* // Slider image roller baller */}

		</><br />

			<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			
			</>






    );
 


}