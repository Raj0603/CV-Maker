import { useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Logo/logo.png"


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};


	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
		// this.setState({loggedIn:False});
	};

	const handleNav = () => {
		document.querySelector("#logout").style.display = "none"
	}

	const logoutFunction = () =>{
		handleLogout;
		handleNav

	}

//	const { loggedIn } = this.state;

	return (
		
		
			<header className="header">
			<img src={logo} alt="" className="logo" />
			<nav className="nav" ref={navRef}>
				<a className="a" href="/#">Home</a>
				<Link to="/Body"><a className="a" href="/#">Build CV</a> </Link>
				<Link className="a" to="/About">About Us</Link>
				<Link className="a" to="/Contact">
					Contact Us</Link>
				<div className="aaa">
					<a className="a"><Link className="a" to="/Signup">
					
							<FaUser /> Login/Register
						</Link></a>

					
					
						<a className="a" id="logout" onClick={logoutFunction}>Log Out
						</a>
                        
						 
				
			</div>

			<button
				className="nav-btn nav-close-btn"
				onClick={showNavbar}>
				<FaTimes />
			</button>
		</nav><button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		
		</header >
		
	);
}
export default Navbar;
