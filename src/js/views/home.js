import React from "react"
import { MainSelectionJumbotron } from "../component/MainSelectionJumbotron"
import { ServiceCards } from "../component/ServiceCards"

import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<MainSelectionJumbotron />
		<ServiceCards />
	</div>
);
