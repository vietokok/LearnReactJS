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
