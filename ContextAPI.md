# Context API

```javascript
import React from 'react';

export const CartContext = React.createContext();

export class CartProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cart: [],
		};
		this.addToCart = this.addToCart.bind(this);
	}

	addToCart(product) {
		this.setState({
			cart: this.state.cart.concat(product),
		});
	}

	render() {
		return (
			<CartContext.Provider
				value={{ cart: this.state.cart, addToCart: this.addToCart }}
			>
				{this.props.children}
			</CartContext.Provider>
		);
	}
}
```

```javascript
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
```

```javascript
import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { CartContext } from '../contexts/Cart';

export default class TopMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Vietokok</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem className="mr-2">
								<Link to="/">Home</Link>
							</NavItem>
							<NavItem>
								<Link to="/product/">Product</Link>
							</NavItem>
							<NavItem>
								<CartContext>
									{({ cart }) => (
										<Link to="/product/">Cart({cart.length})</Link>
									)}
								</CartContext>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
```
