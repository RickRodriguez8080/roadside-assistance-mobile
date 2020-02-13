import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext, useState } from "react";
import { CheckoutCard } from "./CheckoutCard";
import "../../styles/RequestCheckoutPage.css";
import image from "../../img/doggie.png";

export const Request = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState(false);
	return (
		<div className="text-center">
			<span className="buttonspace">
				<button
					type="button"
					className="btn btn-primary btn-lg"
					onClick={() => {
						{
							actions.updateServiceType("gas");
							setState(true);
						}
					}}>
					<h4>Gas</h4>
				</button>
			</span>
			<span className="buttonspace">
				<button
					type="button"
					className="btn btn-primary btn-lg"
					onClick={() => {
						{
							actions.updateServiceType("flat_tire");
							setState(true);
						}
					}}>
					<h4>Flat Tire</h4>
				</button>
			</span>
			<span className="buttonspace">
				<button
					type="button"
					className="btn btn-primary btn-lg"
					onClick={() => {
						actions.updateServiceType("battery");
						setState(true);
					}}>
					<h4>Battery</h4>
				</button>
			</span>
			<div className="checkoutspace">{state && <CheckoutCard />}</div>
            <div>
				<img src={image} style={{ height: "204px", width: "auto", left: "42%", position: "absolute" }} />
			</div>
		</div>
	);
};
