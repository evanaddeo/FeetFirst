import React, {useState, useContext} from "react";
import { Form, Button, Card, Alert, Container} from "react-bootstrap";
import axios from "axios";
import UserContext from "../context/UserContext";
import {useNavigate, Link } from "react-router-dom";
import "../Login.css";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);

    async function handleSubmit(e) {
          e.preventDefault();
          setLoading(true);
          try{
              const loginUser = { email, password };
    
              const loginRes = await axios.post("http://localhost:8082/api/users/login", loginUser)
              setUserData({
                  token: loginRes.data.token,
                  user: loginRes.data.user,
              });

              localStorage.setItem("auth-token", loginRes.data.token);
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
            style={{ minHeight: "100vh"}}
        >
            <div id="mainBox">
                <>
                <Card>
                    <Card.Body>
                        <h2>Log In</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required onChange={e => setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Button disabled={loading} className="btn" type="submit">
                                Log In
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">Need an account?<Link to="/Signup">Sign up</Link></div>
                <img className="imagey" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Running_shoe_icon.png/640px-Running_shoe_icon.png" alt="shoes" />
                </>
            </div>
        </Container>
        </div>
        );
    }

    export default Login;