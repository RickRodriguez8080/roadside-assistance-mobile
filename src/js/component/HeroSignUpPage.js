import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const HeroSignUp = () => {
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [zipcode, setZipCode] = useState("");
	const [phone, setPhone] = useState("");
	const [share_phone, setSharePhone] = useState(false);

	// allows you to access store and action from flux.js
	const { store, actions } = useContext(Context);

	return (
		<div className="my-form">
			<div className="cotainer">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="card">
							<div className="card-header text-center">
								<h2>Hero Account Sign Up</h2>
							</div>
							<div className="card-body">
								<form>
									<div className="form-group row">
										<label htmlFor="first_name" className="col-md-4 col-form-label text-md-right">
											First Name
										</label>
										<div className="col-md-6">
											<input
												onChange={e => setFirstName(e.target.value)}
												type="text"
												value={first_name}
												className="form-control"
												placeholder="Enter First Name"
											/>
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="last_name" className="col-md-4 col-form-label text-md-right">
											Last Name
										</label>
										<div className="col-md-6">
											<input
												onChange={e => setLastName(e.target.value)}
												type="text"
												className="form-control"
												placeholder="Enter Last Name"
											/>
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="email" className="col-md-4 col-form-label text-md-right">
											E-Mail
										</label>
										<div className="col-md-6">
											<input
												onChange={e => setEmail(e.target.value)}
												type="text"
												className="form-control"
												placeholder="Enter Email"
											/>
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="password" className="col-md-4 col-form-label text-md-right">
											Password
										</label>
										<div className="col-md-6">
											<input
												onChange={e => setPassword(e.target.value)}
												type="text"
												className="form-control"
												placeholder="Enter Password"
											/>
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="zip_code" className="col-md-4 col-form-label text-md-right">
											Zip Code
										</label>
										<div className="col-md-6">
											<input
												onChange={e => setZipCode(e.target.value)}
												type="text"
												className="form-control"
												placeholder="Enter Zip Code"
											/>
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="phone" className="col-md-4 col-form-label text-md-right">
											Phone
										</label>
										<div className="col-md-6">
											<input
												onChange={e => setPhone(e.target.value)}
												type="text"
												className="form-control"
												placeholder="Enter Phone"
											/>
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="share_phone" className="col-md-4 col-form-label text-md-right">
											Share Phone
										</label>
										<div className="col-md-6">
											<input
												onChange={e => setSharePhone(true)}
												className="form-control"
												placeholder="Enter Phone"
											/>
										</div>
									</div>
									<div className="col-md-6 offset-md-4">
										<Link to="/thanksforhero">
											<button
												onClick={() =>
													actions.addHero(
														email,
														first_name,
														last_name,
														password,
														zipcode,
														phone,
														share_phone
													)
												}
												type="button"
												className="btn btn-primary form-control">
												Submit
											</button>
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
