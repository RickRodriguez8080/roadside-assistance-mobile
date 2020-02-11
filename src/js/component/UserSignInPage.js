import React, { useContext } from "react";
import "../../styles/HeroUserSignInPage.css";
import { Link } from "react-router-dom";
import { navigate } from "react-router";
import { Context } from "../store/appContext";

export const UserSignIn = props => {
	const { store, actions } = useContext(Context);
	let userloginobj = {
		email: "",
		password: ""
	};
	const useremailchange = e => {
		userloginobj.email = e.target.value;
	};
	const userpasswordchange = e => {
		userloginobj.password = e.target.value;
	};
	const submitUserLogin = e => {
		e.preventDefault();
	};
	return (
		<div>
			<div className="login-form">
				<form onSubmit={submitUserLogin}>
					<h2 className="text-center">User - Sign In</h2>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-user" />
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								placeholder="email"
								required="required"
								name="email"
								onChange={useremailchange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock" />
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								placeholder="password"
								required="required"
								name="password"
								onChange={userpasswordchange}
							/>
						</div>
					</div>
					<div className="form-group">
						<Link to="/loginredirect">
							<button
								type="submit"
								className="btn btn-primary btn-block"
								onClick={() => {
									console.log(userloginobj);
									actions.userLogIn(userloginobj);
								}}>
								Log in
							</button>
						</Link>
					</div>
					<div className="clearfix">
						<label className="pull-left checkbox-inline">
							<input type="checkbox" /> Remember me
						</label>
					</div>
				</form>
				<p>
					Dont have an account!
					<Link to="/usersignup"> Sign up here.</Link>
				</p>
			</div>
		</div>
	);
};
