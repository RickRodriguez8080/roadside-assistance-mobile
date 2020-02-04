import React from "react";
import "../../styles/HeroSignInPage.css";
import { Link } from "react-router-dom";

export const HeroSignIn = () => {
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
							<input type="text" className="form-control" placeholder="Username" required="required" />
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock" />
								</span>
							</div>
							<input type="text" className="form-control" placeholder="Password" required="required" />
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
					<Link to="/herosignup">
						<a href="#">Sign up here</a>.
					</Link>
				</p>
			</div>
		</div>
	);
};
