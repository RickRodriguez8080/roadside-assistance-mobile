import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext, useState } from "react";
import { CheckoutCard } from "./CheckoutCard";

export const Request = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState(false);
	return (
		<div className="text-center">
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
			<button
				type="button"
				className="btn btn-primary btn-lg"
				onClick={() => {
					actions.updateServiceType("battery");
					setState(true);
				}}>
				Battery
			</button>
			{state && <CheckoutCard />}
		</div>
	);
};