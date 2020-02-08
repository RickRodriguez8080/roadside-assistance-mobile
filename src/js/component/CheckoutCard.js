import React from "react";
import { Link } from "react-router-dom";

export const CheckoutCard = () => {
	return (
		<div className="card text-center">
			<div className="card-header">Please confirm your service need</div>
			<div className="card-body">
				<h1 className="card-title mx-auto">Gas</h1>
				<p className="card-text"> 2 Gallon 8 Oz</p>
				<Link to="/status">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Get Service
					</span>
				</Link>

				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back
					</span>
				</Link>
			</div>
			<div className="card-footer text-muted">6:45am</div>
		</div>
	);
};
