import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../Styles/Hustle.css';
import '../Styles/Login.css';

function Contribute() {
    const history = useHistory();
    const handleOnClick = () => history.push('/');

    return (
        <div className="Hustle">
            <div className="Input">
                <div>
                    <h2>Contribute a Gym!</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="gymName">
                            <Form.Label>Gym Name</Form.Label>
                            <Form.Control placeholder="Gym Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="gymDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Description" />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="gymLat">
                                <Form.Label>Latitude</Form.Label>
                                <Form.Control placeholder="Latitude" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="gymLong">
                                <Form.Label>Longitude</Form.Label>
                                <Form.Control placeholder="Longitude" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="gymFile">
                            <Form.Label>Images</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleOnClick}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contribute;
