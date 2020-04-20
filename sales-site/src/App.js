import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import TopMenu from './components/TopMenu';
import Product from './pages/Product';

export default function App() {
	return (
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
	);
}

function Home() {
	return <h2>Home</h2>;
}
