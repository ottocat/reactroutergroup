import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";

import { Blog } from "./views/Blog.jsx";
import { Product } from "./views/Product.jsx";
import { Cart_Checkout } from "./views/Cart_Checkout.jsx";

import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { Thank_You } from "./views/Thank_You.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/Blog" component={Blog} />
						<Route path="/Product/:theid" component={Product} />
						<Route
							path="/Cart_Checkout"
							component={Cart_Checkout}
						/>
						<Route path="/Thanks" component={Thank_You} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
