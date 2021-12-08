import React, { useContext } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import gym_item from '../Assets/fit4less.avif';
import Map from './Map';
import FooterNav from './Footer';
import Context from '../context';
import '../Styles/Item.css';
import '../Styles/Search.css';

function Item({ mapProps }) {
  const { reviews } = useContext(Context);
  console.log(reviews);
  const locations = [
    { lat: reviews[0].Latitude, lng: reviews[0].Longitude, name: reviews[0].GymName },
  ];

  const addMarkers = links => map => {
    links.forEach((loc) => {
      let position = new window.google.maps.LatLng(loc.lat, loc.lng);
      new window.google.maps.Marker({
        map,
        position: position,
      });
    })
  }

  mapProps = {
    options: { center: { lat: reviews[0].Latitude, lng: reviews[0].Longitude }, zoom: 17 },
    onMount: addMarkers(locations)
  }

  const renderCard = (review) => {
    return (
      <Card border="dark" as={Col} className="mb-3">
        <Card.Header>
          Rating: {review.Rating}/5
        </Card.Header>
        <Card.Body>
          <Card.Title>{`${review.FirstName} ${review.LastName}`}</Card.Title>
          <Card.Text>
            <br />
            <p>{review.Review}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  const noResults = () => {
    if (reviews[1].length == 0) {
      return (
        <Card border="dark" as={Col} className="mb-3">
        <Card.Body>
          <Card.Title>No reviews found</Card.Title>
        </Card.Body>
      </Card>
      );
    }
  }

  return (
    <div className="Item">
      <div className="d-flex justify-content-center pb-4">
        <Image src={gym_item} alt="header image" fluid />
      </div>
      <Container>
        <Row>
          <Col className="Location" xs={12} md={6}>
            <h1>{reviews[0].GymName}</h1>
            <hr />
            <p>
              Average Rating: {reviews[0].Rating}/5<br />
              Description: {reviews[0].GymDesc}
            </p>
            <div className="map">
              <Map {...mapProps} />
            </div>
          </Col>
          <Col className="Reviews">
            <h1>Reviews</h1>
            <hr />
            <Container>
              <Col>
                {reviews[1].map(renderCard)}
                {noResults()}
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
      <div className="Fixed-bottom-search">
        <FooterNav />
      </div>
    </div>
  )
}

export default Item;