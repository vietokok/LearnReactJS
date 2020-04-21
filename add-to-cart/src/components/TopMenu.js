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
