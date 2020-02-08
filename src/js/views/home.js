import React from "react";
import { MainSelectionJumbotron } from "../component/MainSelectionJumbotron";
import { ServiceCards } from "../component/ServiceCards";

import "../../styles/home.scss";
import Navbar from "../component/navbar";

export const Home = () => (
	<div>
		<Navbar />
		<div className="text-center mt-5">
			<MainSelectionJumbotron />
			<ServiceCards />
		</div>
	</div>
);
