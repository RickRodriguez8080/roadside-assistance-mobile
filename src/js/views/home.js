import React from "react";
import { MainSelectionJumbotron } from "../component/MainSelectionJumbotron";
import { ServiceCards } from "../component/ServiceCards";

import "../../styles/home.css";
import Navbar from "../component/navbar";

export const Home = () => (
	<div>
		<div className="text-center">
			<MainSelectionJumbotron />
			<ServiceCards />
		</div>
	</div>
);
