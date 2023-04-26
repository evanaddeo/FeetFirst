import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';
import UserContext from"../context/UserContext";
import axios from 'axios';
import "../Signup.css";

function Signup() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [username, setUsername]= useState();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	
	const { setUserData } = useContext(UserContext);

    async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		try{
			const newUser = { email, password, confirmPassword, username };
			await axios.post("http://localhost:8082/api/users/signup", newUser);
			const loginRes = await axios.post("http://localhost:8082/api/users/login", {
				email,
				password,
			});
			setUserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
			});
			localStorage.setItem("auth-token", loginRes.data.token);
			setLoading(false);
			navigate('/');
		} catch (err) {
			setLoading(false);
			err.response.data.msg && setError(err.response.data.msg);
		}
	}

	return (
		<div className="main">
		<Container
			className="innerBox2"
			style={{ minHeight: "100vh" }}
		>
			<div id="mainBox">
			<>
				<Card>
					<Card.Body>
						<h2>Sign Up</h2>
						{error && <Alert variant="danger">{error}</Alert>}
						<Form onSubmit={handleSubmit} id="bigtitles">
							<Form.Group id="username" className="box">
								<Form.Label>Username</Form.Label>
								<Form.Control
									type="name"
									required
									onChange={(e) => setUsername (e.target.value)}
								/>
							</Form.Group>
							<Form.Group id="email" className="box">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>
							<Form.Group id="password" className="box">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									required
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Group>
							<Form.Group id="password-confirm" className="box">
								<Form.Label>Password Confirmation</Form.Label>
								<Form.Control
									type="password"
									required
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</Form.Group>
							<Button onClick={ () => {
                                    navigate("/");
                                }}
								disabled={loading} className="w-100 mt-2" type="submit">
								Sign Up
							</Button>
						</Form>
					</Card.Body>
					
					</Card>
						<div className="w-100 text-center mt-2">
							Already have an account?<Link to="/Login">Log in</Link>
						</div>
						<img className="imagey" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Running_shoe_icon.png/640px-Running_shoe_icon.png" alt="shoes" />
					</>
				</div>
			</Container>
		</div>
		);
}

export default Signup;