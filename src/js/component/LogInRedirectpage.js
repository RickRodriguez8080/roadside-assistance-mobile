import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { UserSignIn } from "./UserSignInPage";
import { Request } from "./RequestPage";

export const LogInRedirect = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div>
			{store.usertoken == "" && <UserSignIn />}
			{store.usertoken != "" && <Request />}
		</div>
	);
};
