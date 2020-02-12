import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext, useState } from "react";
import { CheckoutCard } from "./CheckoutCard";
import "../../styles/RequestCheckoutPage.css";

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
					Gas
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
					Flat Tire
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
					Battery
				</button>
			</span>
			<div className="checkoutspace">{state && <CheckoutCard />}</div>
		</div>
	);
};
