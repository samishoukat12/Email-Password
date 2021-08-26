import React from 'react'
import { Alert, Button, Card, Form } from "react-bootstrap";
import { doSignUp } from '../../store/action/AuthAction';
import { Link } from "react-router-dom";
import UseSignUp from './UseSignUp';
import "./SignUp.css";
function SignUp() {
    const [email,password,phone,country,name,setEmail,setPassword,doSignUpUser,setLoading,setName,setPhone,setCountry] = UseSignUp()
    return (
        <>
            <Card >
                <Card.Body >
                    <h2 className="text-center md-4">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name}  onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                            <Form.Group >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </Form.Group>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Label></Form.Label>

                        {/* <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" required />
                        </Form.Group>            */}
                    </Form>
                    <Button type="submit" className="w-100" onClick={doSignUpUser}>Sign Up</Button>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account ?
                <Link to="/login">login</Link>

                <p>{email}</p>

            </div>
        </>
    )
}

export default SignUp;
