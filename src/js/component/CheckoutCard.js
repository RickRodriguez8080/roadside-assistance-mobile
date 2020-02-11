import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CheckoutCard = () => {
	const { store, actions } = useContext(Context);
	var Latitude = "";
	var Longitude = "";
	getLocation();
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			("Geolocation is not supported by this browser.");
		}
	}
	function showPosition(position) {
		Latitude = position.coords.latitude;
		Longitude = position.coords.longitude;
		console.log(Latitude);
		console.log(Longitude);
	}
	return (
		<div className="card text-center">
			<div className="card-header">Please confirm your service need</div>
			<div className="card-body">
				<h1 className="card-title mx-auto">{store.servicename}</h1>
				<button
					type="button"
					className="btn btn-success btn-lg"
					onClick={() => {
						actions.createIncident(Latitude.toString(), Longitude.toString(), store.servicename);
					}}>
					Get Service
				</button>
				<Link to="/requestpage">
					<button type="button" className="btn btn-primary btn-lg">
						Go Back
					</button>
				</Link>
			</div>
			<div className="card-footer text-muted">you will get the response as soon as possible!!</div>
		</div>
	);
};
