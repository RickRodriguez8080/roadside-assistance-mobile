import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/rigo-baby.jpg";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={logo} />
				{/* <span className="navbar-brand mb-0 h1">Company Logo</span> */}
			</Link>
			<div>
				<div className="ml-auto">
					<Link to="/herosignin">
						<button className="btn btn-primary">Hero Sign-In</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/usersignin">
						<button className="btn btn-primary">User Sign-In</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
