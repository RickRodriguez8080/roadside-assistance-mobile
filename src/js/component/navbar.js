import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Company Logo</span>
			</Link>
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
		</nav>
	);
};
