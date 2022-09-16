import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className="header">
			<h3>LOGO</h3>
			<nav className="nav" ref={navRef}>
				<a className="a" href="/#">Home</a>
				<a className="a" href="/#">Build CV</a>
				<a className="a" href="/#">Contact Us</a>
				<a className="a" href="/#">About Us</a>
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
	);
}

export default Navbar;