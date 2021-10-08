import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import gym_item from '../Assets/fit4less.avif';
import gym_mapitem from '../Assets/gym_mapitem.avif';
import '../Styles/Item.css';
import '../Styles/Search.css';

function Item() {
    return (
        <div className="Item">
            <div className="d-flex justify-content-center pb-4">
                <Image src={gym_item} fluid />
            </div>
            <Container>
                <Row>
                    <Col className="Location" xs={12} md={6}>
                        <h1>Fit4Less</h1>
                        <hr />
                        <p>
                            Average Rating: 3.9/5.0<br/>
                            Location: 3434 Lawrence Avenue East, Scarborough, ON
                        </p>
                        <div className="map">
                            <Image src={gym_mapitem} fluid/>
                        </div>
                    </Col>
                    <Col className="Reviews">
                        <h1>Reviews</h1>
                        <hr />
                        <Container>
                            <Col>
                                <Card border="dark" as={Col} className="mb-3">
                                    <Card.Header>
                                        5.0/5.0
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>Shamela Kody</Card.Title>
                                        <Card.Subtitle>Long-time User</Card.Subtitle>
                                        <Card.Text>
                                            <br />
                                            <p>
                                                Clean and friendly atmosphere. The hydro
                                                massages are amazing after a good workout!
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="dark" as={Col} className="mb-3">
                                    <Card.Header>
                                        5.0/5.0
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>T R Chowdhury</Card.Title>
                                        <Card.Subtitle>Gym Enthusiast</Card.Subtitle>
                                        <Card.Text>
                                            <br />
                                            <p>
                                                Good gym, not very busy. Friendly staff.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="dark" as={Col} className="mb-3">
                                    <Card.Header>
                                        5.0/5.0
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>Mohammad Mujammil Shaikh</Card.Title>
                                        <Card.Subtitle>Hustle-maniac</Card.Subtitle>
                                        <Card.Text>
                                            <br />
                                            <p>
                                                This location is at markham and Lawrence
                                                intersection near the marks and opposite to
                                                the cedarbrae mall. It has a quite big space
                                                that allows as many people as 50 at a dame
                                                time. The staff is very friendly and supportive.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="dark" as={Col} className="mb-3">
                                    <Card.Header>
                                        2.0/5.0
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>Urvesh Karia</Card.Title>
                                        <Card.Subtitle>Weightlifter</Card.Subtitle>
                                        <Card.Text>
                                            <br />
                                            <p>
                                                I had a very poor payments experience. The gyms
                                                were closed for large part of the year and they
                                                charged penalties as I forgot to update my banking
                                                info. How can I update the info without even knowing
                                                when they’ll open?? And they didn’t even send a
                                                warning. I’ve made several of my friends join the
                                                gym and all I get in return is the rigid answers.
                                                Policies are good but there must be room for 
                                                exceptions.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Item;