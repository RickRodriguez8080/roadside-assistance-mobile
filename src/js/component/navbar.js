import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/rigo-baby.jpg";
import "./navbar.css";

const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-md">
			<Link to="/">
				<img src={logo} />
				{/* <span className="navbar-brand mb-0 h1">Company Logo</span> */}
			</Link>

			{store.useremail == "" && (
				<div className="navbar-nav ml-auto">
					<Link to="/herosignin">
						<button className="btn btn-primary">Hero Sign-In</button>
					</Link>
					<Link to="/usersignin">
						<button className="btn btn-primary">User Sign-In</button>
					</Link>
				</div>
			)}
			{store.useremail != "" && (
				<div className="navbar-nav ml-auto">
					<Link to="/">
						<button className="btn btn-primary" onClick={actions.logOut}>
							Log Out
						</button>
					</Link>
				</div>
			)}
		</nav>
	);
};
export default Navbar;
