import React from "react";

export const UserSignUp = () => {
	return (
		<div className="my-form">
			<div className="cotainer">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="card">
							<div className="card-header text-center">
								<h2>Create Account</h2>
							</div>
							<div className="card-body">
								<form>
									<div className="form-group row">
										<label htmlFor="first_name" className="col-md-4 col-form-label text-md-right">
											First Name
										</label>
										<div className="col-md-6">
											<input
												type="text"
												id="first_name"
												className="form-control"
												name="first_name"
											/>
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="last_name" className="col-md-4 col-form-label text-md-right">
											Last Name
										</label>
										<div className="col-md-6">
											<input
												type="text"
												id="last_name"
												className="form-control"
												name="last_name"
											/>
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="email" className="col-md-4 col-form-label text-md-right">
											E-Mail
										</label>
										<div className="col-md-6">
											<input type="text" id="email" className="form-control" name="email" />
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="password" className="col-md-4 col-form-label text-md-right">
											Password
										</label>
										<div className="col-md-6">
											<input type="text" id="password" className="form-control" name="password" />
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="phone" className="col-md-4 col-form-label text-md-right">
											Phone
										</label>
										<div className="col-md-6">
											<input type="text" id="phone" className="form-control" name="phone" />
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="share_phone" className="col-md-4 col-form-label text-md-right">
											Share Phone
										</label>
										<div className="col-md-6">
											<input
												type="text"
												id="share_phone"
												className="form-control"
												name="share_phone"
											/>
										</div>
									</div>
									<div className="col-md-6 offset-md-4">
										<button type="submit" className="btn btn-primary">
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
