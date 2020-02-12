import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/popresq_logo.png";
import "./navbar.css";

const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-md navbar-collapse">
			<Link to="/">
				<img className="logo" src={logo} />
				{/* <span className="navbar-brand mb-0 h1">Company Logo</span> */}
			</Link>

			{store.email == "" && (
				<div className="navbar-nav ml-auto pr-2">
					<Link to="/herosignin">
						<button className="btn btn-primary hero-button">Hero Sign-In</button>
					</Link>
					<Link to="/usersignin">
						<button className="btn btn-primary user-button">User Sign-In</button>
					</Link>
				</div>
			)}
			{store.email != "" && (
				<div className="navbar-nav ml-auto pr-2">
					<Link to="/">
						<button className="btn btn-primary logout-button" onClick={actions.logOutChange}>
							Log Out
						</button>
					</Link>
				</div>
			)}
		</nav>
	);
};
export default Navbar;
