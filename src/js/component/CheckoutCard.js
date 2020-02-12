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
				<span className="getservicespace">
					<button
						type="button"
						className="btn btn-primary btn-lg"
						onClick={() => {
							actions.createIncident(
								Latitude.toString(),
								Longitude.toString(),
								store.servicename,
								store.useremail,
								store.usertoken
							);
						}}>
						Get Service
					</button>
				</span>
				<Link to="/">
					<button type="button" className="btn btn-primary btn-lg">
						Go Back
					</button>
				</Link>
			</div>
			{store.incidentstatus == 200 && (
				<div className="alert alert-success">Success!!! You will get the response as soon as possible..</div>
			)}
			{store.incidentstatus == "" && <div className="card-footer text-muted" />}
			{store.incidentstatus != 200 &&
				store.incidentstatus != "" && (
					<div className="card-footer text-muted">Sorry!!! System is down,can you try again</div>
				)}
		</div>
	);
};
