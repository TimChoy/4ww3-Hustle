import googlemaps from '../Assets/true_map.avif';
import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import '../Styles/Search.css';
import '../Styles/Hustle.css';


function Search() {
    const history = useHistory();
    const handleOnClick = () => history.push('/item');

    return (
        <div className="Hustle Search">
            <div className="map-div">
                <Image src={googlemaps} alt="google maps of searched area" fluid/>
            </div>
            <Row className="g-0 mb-4" xs={1} md={2}>
                <Card as={Col} className="card">
                    <Card.Header className="d-flex justify-content-between">
                        <div>Fitness Centre</div>
                        <div>Rating: 4.6/5.0</div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Snap Fitness</Card.Title>
                        <Card.Text>
                            <p>
                                Address: 8130 Sheppard Avenue East Suite 108 and 109 <br />
                                Distance: 10.5km
                            </p>
                            <Button variant="primary" onClick={handleOnClick}>
                                Reviews
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card as={Col} className="card">
                    <Card.Header className="d-flex justify-content-between">
                        <div>Gym</div>
                        <div>Rating: 3.9/5.0</div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>GoodLife Fitness Scarborough Cedarbrae Mall</Card.Title>
                        <Card.Text>
                            <p>
                                Address: 3495 Lawrence Avenue East, Scarborough, ON <br />
                                Distance: 5.2km
                            </p>
                            <Button variant="primary" onClick={handleOnClick}>
                                Reviews
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card as={Col} className="card">
                    <Card.Header className="d-flex justify-content-between">
                        <div>Fitness Centre</div>
                        <div>Rating: 3.6/5.0</div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>World Gym</Card.Title>
                        <Card.Text>
                            <p>
                                1455 McCowan Road, Scarborough, ON <br />
                                Distance: 8.2km
                            </p>
                            <Button variant="primary" onClick={handleOnClick}>
                                Reviews
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card as={Col} className="card">
                    <Card.Header className="d-flex justify-content-between">
                        <div>Gym</div>
                        <div>Rating: 3.9/5.0</div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Fit4Less</Card.Title>
                        <Card.Text>
                            <p>
                                Address: 3434 Lawrence Avenue East, Scarborough, ON<br />
                                Distance: 2.7km
                            </p>
                            <Button variant="primary" onClick={handleOnClick}>
                                Reviews
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
}

export default Search;