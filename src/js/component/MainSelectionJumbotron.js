import React from "react";
//import { Link } from "react-router-dom";
import Jumboimg from "../../img/Jumboimg.png";

export const MainSelectionJumbotron = () => {
	return (
		<div className="jumbotron">
			{/*<img className="incident-image" src={Jumboimg} alt="Incident image" />*/}
			<div>
				<h2 className="display-2">Stranded? </h2>
				<h3 className="answer">Real heroes are always nearby</h3>
			</div>
			{/*<p className="lead">Please choose the service you need</p>
			<hr className="my-2" />*/}
		</div>
	);
};
