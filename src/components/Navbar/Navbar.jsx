import React, { useContext, useRef, useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Logo/logo.png";


import { UserContext } from "../../App";
import Login from "../Login/Login";




function Navbar() {
	const navRef = useRef();

	const { state, dispatch } = useContext(UserContext);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem('jwt');
		setAuthenticationToken(false);
		setIsLoggedin(false);
		dispatch(Login=false);


		window.location ="/";


	};


	const Rendermenu = () => {
		if (state) {
			return (
				<>

					<a className="a" href="/#">Home</a>
					<a className="a" href="/#">Build CV</a>
					<Link className="a" to="/About">About Us</Link>
					<Link className="a" to="/Contact">
						Contact Us</Link>
					<div className="aaa">
						<a className="a"><Link className="a" onClick={handleLogout} to="/">
							<FaUser />

							Log out

						</Link></a>
					</div>


				</>
			)
		}

		else {
			return (

				<>
					<a className="a" href="/#">Home</a>
					<a className="a" href="/#">Build CV</a>
					<Link className="a" to="/About">About Us</Link>
					<Link className="a" to="/Contact">
						Contact Us</Link>

				 	<a className="a"><Link className="a" to="/Signup">
						<FaUser />
						Login/Register
					</Link></a>
					
				</>

			)
		}

	}








	// const user = localStorage.getItem("token");
	//let user = JSON.parse(localStorage.getItem('User'));
	//console.log(user);



	//const [isLoggedin, setIsLoggedin] = useState(false);

	return (


		<><header className="header">
			<img src={logo} alt="" className="logo" />
			<nav className="nav" ref={navRef}>
				 
				 <Rendermenu/>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav><button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>

		</header>
		</>
	);
}
export default Navbar;