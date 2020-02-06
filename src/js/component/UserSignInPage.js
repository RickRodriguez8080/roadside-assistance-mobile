import React from "react";
import "../../styles/HeroUserSignInPage.css";
import { Link } from "react-router-dom";

export const UserSignIn = () => {
	return (
		<div>
			<div className="login-form">
				<form>
					<h2 className="text-center">Sign In </h2>
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
							/>
						</div>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary btn-block">
							Log in
						</button>
					</div>
					<div className="clearfix">
						<label className="pull-left checkbox-inline">
							<input type="checkbox" /> Remember me
						</label>
					</div>
				</form>
				<p>
					Dont have an account!
					<Link to="/usersignup">Sign up here.</Link>
				</p>
			</div>
		</div>
	);
};
