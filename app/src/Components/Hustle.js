import React, { useState, useContext, useEffect } from 'react';
import { Button, Col, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import useGeolocation from 'react-hook-geolocation';
import axios from 'axios';
import FooterNav from './Footer';
import Context from '../context';
import '../Styles/Hustle.css';

function Hustle() {
  const { setData } = useContext(Context);
  const [onReady, setReady] = useState(false);
  const history = useHistory();
  const handleOnClick = () => history.push('/search');

  // Contains the geolocation information of the user
  const geolocation = useGeolocation();

  useEffect(() => {
    if (!!geolocation && onReady) {
      console.log(geolocation);
      history.push('/search');
    }

    axios.get(process.env.REACT_APP_SERVER).then(resp => {
      console.log(resp.data);
    });
  }, [geolocation, history, onReady]);

  const currentLocation = () => {
    setData(geolocation);
    setReady(true);
  }

  const [rating, setRating] = useState('Rating');

  return (
    <div className="Hustle">
      <div className="Box">
        <h1>Let's Hustle</h1>
        <Form className="w-20">
          <Row className="mb-2">
            <Col fluid>
              <Form.Control size="lg" placeholder="Search" />
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col className="overrideWidth">
              <DropdownButton size="lg" title={rating}> {/* Potential to add props to this button title */}
                <Dropdown.Item onClick={() => setRating('5 Stars')}>5 Stars</Dropdown.Item>
                <Dropdown.Item onClick={() => setRating('4 Stars')}>4 Stars</Dropdown.Item>
                <Dropdown.Item onClick={() => setRating('3 Stars')}>3 Stars</Dropdown.Item>
                <Dropdown.Item onClick={() => setRating('2 Stars')}>2 Stars</Dropdown.Item>
                <Dropdown.Item onClick={() => setRating('1 Star')}>1 Star</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm="auto" className="overrideWidth">
              <Button 
                size="lg"
                variant="primary"
                type="button"
                aria-label="current location"
                onClick={currentLocation}
                style={{marginRight: 1 + 'em'}}
              >
                <BiCurrentLocation />
              </Button>
              <Button
                size="lg"
                variant="primary"
                type="submit"
                aria-label="search button"
                onClick={handleOnClick}
              >
                <FaSearch />
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="Fixed-bottom-hustle">
        <FooterNav />
      </div>
    </div>
  );
}

export default Hustle;