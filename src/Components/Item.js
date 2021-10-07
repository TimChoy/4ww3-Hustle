import React from 'react';
import {Row, Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import gym_item from '../Assets/gym_item.jpeg';
import gym_mapitem from '../Assets/gym_mapitem.jpeg';
import '../Styles/Item.css';

function Item() {
    return (
        <div>
            <Container>
                <Row className = "row">
                    <Col className = "col" xs={3} md={5}>
                        <Image src={gym_item} className = "img" />
                    </Col>
                    <Col className = "col" xs={3} md={5}>
                        <Image src={gym_mapitem} className = "img" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Item;