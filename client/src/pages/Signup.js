import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import Register from '../components/Register';
import { Form } from 'react-bootstrap'

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			accountCreated: false
		}
	}

	handleSuccess = () => {
		this.setState({ accountCreated: true });
	}

	renderSignUpComplete = () => {
		return (
			<div>
				<h1 className="my-3">Your account has successfully been created!</h1>
				<div className="d-flex justify-content-center">
					<Button as={Link} to="/" className="p-3 m-3 w-25" style={{ fontSize: "20px" }}>Home</Button>
				</div>
			</div>
		);
	}

	render() {
		return (
			<Container className="my-auto">
				<Jumbotron className="px-5 py-4 m-0 text-center jumbo">
					<Form.Group controlId="formBasicCheckbox">
						<h4 className="signUpLink"><b>Already have an account? <Link to="/login">Login</Link></b></h4>
					</Form.Group>
					{!this.state.accountCreated ? <Register handleSuccess={this.handleSuccess} /> : this.renderSignUpComplete()}
				</Jumbotron>
			</Container>
		);
	}
}

export default SignUp;