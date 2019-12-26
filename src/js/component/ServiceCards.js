import React from "react";
//import { Link } from "react-router-dom";

export const ServiceCards = () => {
	return (
		<div className="card-deck">
			<div className="card card-gas bg-danger">
				<a href="!#">
					<img
						className="card-img-top"
						src="file:///workspace/react-hello-webapp/src/img/gas-pump.png"
						alt="Gas Pump"
					/>
					<div className="card-body">
						<h4 className="card-title text-white">Gas</h4>
					</div>
				</a>
			</div>
			<div className="card card-tire bg-warning">
				<a href="!#">
					<img
						className="card-img-top"
						src="file:///workspace/react-hello-webapp/src/img/gas-pump.png"
						alt="Gas Pump"
					/>
					<div className="card-body">
						<h4 className="card-title text-dark">Flat Tire</h4>
					</div>
				</a>
			</div>
			<div className="card card-battery bg-secondary">
				<a href="!#">
					<img
						className="card-img-top"
						src="file:///workspace/react-hello-webapp/src/img/gas-pump.png"
						alt="Gas Pump"
					/>
					<div className="card-body">
						<h4 className="card-title text-white">Battery</h4>
					</div>
				</a>
			</div>
		</div>
	);
};
