import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import '../Styles/Hustle.css';
import '../Styles/Login.css';

function Login() {
    const history = useHistory();
    const handleOnClick = () => history.push('/');

    return (
        <div className="Hustle">
            <div className="Input"> {/* TODO: Use Formik for validation */}
                <div>
                    <h2>Register</h2>
                </div>
                <Form> {/* Form for registration */}
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="registerFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="registerLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last Name" />
                        </Form.Group>
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="registerEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="registerPass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="New password" />
                    </Form.Group>

                    <Form.Group className="mb-3" id="registerCheckbox">
                        <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleOnClick}>
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
