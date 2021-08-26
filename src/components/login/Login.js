// import './LoginPage.css';
import { Card,Form,Button } from 'react-bootstrap';
import UseLogin from './UseLogin';

function Login() {
    const [setEmail, setPassword, doLoginUser] = UseLogin();
    return (
        <div>
            <Card>
                <Card.Body>
                  <center><h2>LOGIN</h2></center>  
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
                            <Form.Label></Form.Label>
  </Form.Group>
  <Button type="submit" className="w-100" onClick={doLoginUser}>Login</Button>
                    </Form>                      
                </Card.Body>  

            </Card>
        </div>
    );
}
export default Login;
