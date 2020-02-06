const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			hero: [],
			incident: []
		},
		actions: {
			//test
			loadUsers() {
				let url = "https://3000-a42ea97b-6a3b-446f-9ace-fe6c205aaac3.ws-us02.gitpod.io/user";
				fetch(url)
					.then(response => response.json())
					.then(results => {
						// test to see that the contacts were fetched successfully
						console.log("**loadUsers**", results);
						setStore({
							output: results
						});
					})
					.catch(e => console.error(e));
			}, // end loadContacts()

			addUser(email, first_name, last_name, password, phone, phone_share) {
				fetch("https://3000-a42ea97b-6a3b-446f-9ace-fe6c205aaac3.ws-us02.gitpod.io/user", {
					method: "POST", // or 'PUT'
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						first_name: first_name,
						last_name: last_name,
						password: password,
						phone: phone,
						share_phone: phone_share
					}) // data can be `string` or {object}!
				})
					.then(res => {
						if (!res.ok) {
							throw new Error("Error");
						}
						return res.json();
					})
					.then(response => console.log("addContact Success:", JSON.stringify(response)))
					.catch(error => console.error("Error:", error))

					.then(() => {
						getActions().loadUsers();
					});
			} // end addUser
		} // end actions
	}; // end return
}; // end getState()

export default getState;
