import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
							<NavItem>
								<Link to="/">Home</Link>
							</NavItem>
							<NavItem>
								<Link to="/product/">Product</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
