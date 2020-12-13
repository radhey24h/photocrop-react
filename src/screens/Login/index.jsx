import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import Dashboard from '../Dashboard';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  const history = useHistory()

  function handleSubmit(event) {
    event.preventDefault();

    let userDetails = localStorage.getItem('userDetails')
    let user = JSON.parse(userDetails);
    if (user.email === email && user.password === password) {
      history.push('/dashboard')
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <div>
          {/* <div>
                            <Link to="/">
                                {"Login"}
                            </Link>
                        </div> */}
          <div>
            <Link to="/registration">
              New User?
                            </Link>
          </div>
        </div>

      </Form>
    </div>
  );
}