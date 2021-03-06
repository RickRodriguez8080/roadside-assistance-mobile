import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { AngelSignIn } from "./views/angelSignIn";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import { HeroSignIn } from "./component/HeroSignInPage";
import { HeroSignUp } from "./component/HeroSignUpPage";
import { UserSignIn } from "./component/UserSignInPage";
import { UserSignUp } from "./component/UserSignUpPage";
import { CheckoutCard } from "./component/CheckoutCard";
import { Request } from "./component/RequestPage";
import { LogInRedirect } from "./component/LogInRedirectpage";
import { ThanksForHero } from "./component/ThankYouForHeropage";

//import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/herosignin" component={HeroSignIn} />
						<Route path="/herosignup" component={HeroSignUp} />
						<Route path="/usersignin" component={UserSignIn} />
						<Route path="/usersignup" component={UserSignUp} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/checkout" component={CheckoutCard} />
						<Route path="/requestpage" component={Request} />
						<Route path="/loginredirect" component={LogInRedirect} />
						<Route path="/thanksforhero" component={ThanksForHero} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					{/*Original position of footer*/}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
