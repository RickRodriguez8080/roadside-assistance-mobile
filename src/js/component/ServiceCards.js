import React from "react";
//import { Link } from "react-router-dom";
import Alert from "../../img/Alert.png";
import Fast from "../../img/Fast2.png";
import Save from "../../img/Save.png";
import "../../styles/home.css";

export const ServiceCards = props => {
	return (
		<div className="card-deck">
			<div className="card card-request-help">
				<div className="card-body">
					<img className="card-img-top" src={Alert} alt="Send Alert" />
					<h3 className="card-title text-dark">Request Help</h3>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show
					</p>
				</div>
			</div>
			<div className="card card-save-time">
				<div className="card-body">
					<img className="card-img-top" src={Fast} alt="Save Time" />
					<h3 className="card-title text-dark">Get Quick Assistance</h3>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show
					</p>
				</div>
			</div>
			<div className="card card-save-money">
				<div className="card-body">
					<img className="card-img-top" src={Save} alt="Save Money" />
					<h3 className="card-title text-dark">Back on the Road (for Less)</h3>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show
					</p>
				</div>
				{/* {console.log(service)} */}
			</div>
		</div>
	);
};
