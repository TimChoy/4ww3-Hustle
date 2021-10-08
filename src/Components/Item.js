import React from 'react';
import Card from 'react-bootstrap/Card'
import {Row, Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import gym_item from '../Assets/gym_item.jpeg';
import gym_mapitem from '../Assets/gym_mapitem.jpeg';
import '../Styles/Item.css';

function Item() {
    return (
        <div>
            <Container>
                <Row  className = "d-flex justify-content-center w-100" >
                    <Col xs={1} md={2}>
                        <Image src={gym_item} fluid />
                    </Col>
                    <Col xs={1} md={2}>
                        <Image src={gym_mapitem} fluid />
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Card border="dark" as={Col} className="card">
                        <Card.Header className="d-flex">
                            <div>5.0/5.0</div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Shamela Kody</Card.Title>
                            <Card.Subtitle> Local Guide </Card.Subtitle>
                            <Card.Text>
                                <p>
                                <br/>
                                Clean and friendly atmosphere. The hydro massages are amazing after a good workout! 
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Card border="dark" as={Col} className="card">
                        <Card.Header className="d-flex">
                            <div>5.0/5.0</div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>T R Chowdhury</Card.Title>
                            <Card.Subtitle> Local Guide </Card.Subtitle>
                            <Card.Text>
                                <p>
                                <br/>
                                Good Gym, not very busy. Friendly staff. 
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Card border="dark" as={Col} className="card">
                        <Card.Header className="d-flex">
                            <div>5.0/5.0</div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Mohammad Mujammil Shaikh</Card.Title>
                            <Card.Subtitle>Local Guide</Card.Subtitle>
                            <Card.Text>
                                <p>
                                <br/>
                                This location is at markham and Lawrence intersection near the marks and opposite to the cedarbrae mall. 
                                It has a quite big space that allows as many people as 50 at a dame time. The staff is very friendly and supportive.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Card border="dark" as={Col} className="card">
                        <Card.Header className="d-flex">
                            <div>2.0/5.0</div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Urvesh Karia</Card.Title>
                            <Card.Subtitle> Local Guide </Card.Subtitle>
                            <Card.Text>
                                <p>
                                <br/>
                                I had a very poor payments experience. 
                                The gyms were closed for large part of the year and they charged penalties as I forgot to update my banking info. 
                                How can I update the info without even knowing when they’ll open?? And they didn’t even send a warning. 
                                I’ve made several of my friends join the gym and all I get in return is the rigid answers.
                                Policies are good but there must be room for exceptions. 
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Card border="dark" as={Col} className="card">
                        <Card.Header className="d-flex">
                            <div>1.0/5.0</div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Charlene Rosillo</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text>
                                <p>
                                <br/>
                                Terrible staff.. no one ever answers the phone.. i will be going to another gym. it isn't worth it. i suggest you all do the same. 
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default Item;