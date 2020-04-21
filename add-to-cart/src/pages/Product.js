import React from 'react';

import axios from 'axios';
import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from 'reactstrap';

import { CartContext } from '../contexts/Cart';

export default class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}
	componentDidMount() {
		axios.get('http://localhost:8080/products').then((res) => {
			this.setState({
				products: res.data,
			});
		});
	}

	render() {
		const { products } = this.state;

		return (
			<Container>
				<Row sm="2" md="4" lg="6">
					{products.map((item) => (
						<Col>
							<Card>
								<CardImg
									top
									width="100%"
									src={item.imageUrl}
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>{item.name}</CardTitle>
									<CardText>{item.description}</CardText>
									<CartContext>
										{({ addToCart }) => (
											<Button onClick={() => addToCart(item)}>
												Add to cart
											</Button>
										)}
									</CartContext>
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		);
	}
}
