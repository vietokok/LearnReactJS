import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopMenu from './components/TopMenu';
import Product from './pages/Product';
import { CartProvider } from './contexts/Cart';

export default function App() {
	return (
		<CartProvider>
			<Router>
				<div className="App">
					<TopMenu />
					<Switch>
						<Route path="/product">
							<Product />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</CartProvider>
	);
}

function Home() {
	return <h2>Home</h2>;
}
