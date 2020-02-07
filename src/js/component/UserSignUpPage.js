import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserSignUp = () => {
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [share_phone, setSharePhone] = useState();

	// allows you to access store and action from flux.js
	const { store, actions } = useContext(Context);

	return (
		<div className="my-form">
			<div className="cotainer">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="card">
							<div className="card-header text-center">
								<h2>User Account Sign Up</h2>
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
												onChange={e => setSharePhone(e.target.value)}
												className="form-control"
												placeholder="Enter Phone"
											/>
										</div>
									</div>
									<div className="col-md-6 offset-md-4">
										<button
											onClick={() =>
												actions.addUser(
													email,
													first_name,
													last_name,
													password,
													phone,
													share_phone
												)
											}
											type="button"
											className="btn btn-primary form-control">
											Submit
										</button>
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
