import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Registration.css";
import { Link, useHistory } from 'react-router-dom';
import Dashboard from '../Dashboard';

export default function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    const history = useHistory()

    function handleSubmit(event) {
        event.preventDefault();


        let user = {
            email,
            password
        }
        console.log(user);
        localStorage.setItem('userDetails', JSON.stringify(user));
        history.push('/');
    }

    return (
        <div className="Registration">
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
                    Registration
        </Button>
                <div>
                    <div>
                        <Link to="/">
                            {"Login"}
                        </Link>
                    </div>

                </div>

            </Form>
        </div>
    );
}