import React, { useRef } from "react";
import { Form, Button, Card} from 'react-bootstrap';

export default function AddNewUser()
{
    const name = useRef();
    const email = useRef();
    const password = useRef();

    function submitForm(e) {
        e.preventDefault();
        const Name = name.current.value;
        const Email = email.current.value;
        const Password = password.current.value;
        console.log(Name, Email, Password);
        name.current.value = "";
        email.current.value = "";
        password.current.value = "";
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Add New User</Card.Title>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                        <Form.Text className="text-muted" ref = {name}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted" ref = {email}>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  ref = {password}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={submitForm}>
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}