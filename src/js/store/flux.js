const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			hero: [],
			servicename: "",
			useremail: "",
			usertoken: ""
		},
		actions: {
			//test
			loadUsers() {
				let url = "https://roadside-assistance-api.herokuapp.com/user";
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
			}, // end loadUsers()

			loadHeroes() {
				let url = "https://roadside-assistance-api.herokuapp.com/hero";
				fetch(url)
					.then(response => response.json())
					.then(results => {
						// test to see that the contacts were fetched successfully
						console.log("**loadHeros**", results);
						setStore({
							output: results
						});
					})
					.catch(e => console.error(e));
			}, // end loadHeros()

			// adding users and heroes
			addUser(email, first_name, last_name, password, phone, share_phone) {
				fetch("https://roadside-assistance-api.herokuapp.com/user", {
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
						share_phone: share_phone
					}) // data can be `string` or {object}!
				})
					.then(res => {
						if (!res.ok) {
							throw new Error("Error");
						}
						return res.json();
					})
					//.then(response => console.log("addContact Success:", JSON.stringify(response)))
					.catch(error => console.error("Error:", error))

					.then(() => {
						getActions().loadUsers();
					});
			}, // end addUser

			addHero(email, first_name, last_name, password, zipcode, phone, share_phone) {
				fetch("https://roadside-assistance-api.herokuapp.com/hero", {
					method: "POST", // or 'PUT'
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						first_name: first_name,
						last_name: last_name,
						password: password,
						zip_code: zipcode,
						phone: phone,
						share_phone: share_phone
					}) // data can be `string` or {object}!
				})
					.then(res => {
						if (!res.ok) {
							throw new Error("Error");
						}
						return res.json();
					})
					//.then(response => console.log("addContact Success:", JSON.stringify(response)))
					.catch(error => console.error("Error:", error))

					.then(() => {
						getActions().loadHeroes();
					});
			}, // end addHero

			userLogIn: loginobj => {
				setStore({ useremail: loginobj.email });
				fetch("https://roadside-assistance-api.herokuapp.com/user/login", {
					method: "POST",
					body: JSON.stringify(loginobj),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(obj => {
						setStore({ usertoken: obj.key });
					});
			}, //end userLogIn

			updateServiceType: servicetype => {
				setStore({ servicename: servicetype });
			}, //end updateServiceType

			createIncident: (lati, longi, servicename, useremail) => {
				fetch("https://roadside-assistance-api.herokuapp.com/incident", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: useremail,
						servicetype_name: servicename,
						latitude: lati,
						longitude: longi
					})
				}).then(data => {
					console.log("Success:", data);
				});
			}, //end createIncident

			logOut: () => {
				setStore({ useremail: "", usertoken: "" });
			} //end logOut
		} // end actions
	}; // end return
}; // end getState()

export default getState;
