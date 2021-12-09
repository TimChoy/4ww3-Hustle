import React, { useState, useContext } from 'react';
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
  const history = useHistory();

  // Contains the geolocation information of the user
  const geolocation = useGeolocation();

  const [rating, setRating] = useState('Rating');
  const [search, setSearch] = useState('');

  const callDB = async (location) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    };
    let payload = {
      lat: location ? geolocation.latitude : null,
      lng: location ? geolocation.longitude : null
    };
    let gymList = [];
    let promise = new Promise((resolve, reject) => {
      axios.post(process.env.REACT_APP_SERVER + '/gyms', payload, axiosConfig).then(resp => {
        gymList = resp.data;
        if (search !== "") {
          // Filter by searchbox
          gymList = gymList.filter(gym => gym.GymName.startsWith(search))
        }

        let ratingVal = parseInt(rating.charAt(0))
        // Add rating to gyms
        let promises = [];
        for (const [i, gym] of gymList.entries()) {
          promises.push(new Promise((resolve, reject) => {
            let payload = { gymID: gym.GymID };
            axios.post(process.env.REACT_APP_SERVER + '/reviews/avg', payload, axiosConfig).then(resp => {
              let gymRating = resp.data[0]['AVG(Rating)'];
              gymList[i] = Object.assign(gym, { Rating: gymRating });
              resolve();
            }).catch(error => reject());
          }));
        }
        resolve(Promise.all(promises).then(() => {
          // Filter out ratings if rating is selected
          if (!isNaN(ratingVal)) {
            gymList = gymList.filter(gym => gym.Rating >= ratingVal);
          }
          return gymList;
        }));
      }).catch(error => {
        console.log('Unauthorized')
        reject(null);
      });
    })
    const res = await promise;
    return res;
  }

  const handleOnClick = async () => {
    let gymList = await callDB(false)
    setData([null, gymList]);
    history.push('/search');
  };

  const currentLocation = async () => {
    let gymList = await callDB(true)
    setData([geolocation, gymList]);
    history.push('/search');
  }

  return (
    <div className="Hustle">
      <div className="Box">
        <h1>Let's Hustle</h1>
        <Form className="w-20">
          <Row className="mb-2">
            <Col fluid>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Search"
                onChange={e => setSearch(e.target.value)}
              />
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
                style={{ marginRight: 1 + 'em' }}
              >
                <BiCurrentLocation />
              </Button>
              <Button
                size="lg"
                variant="primary"
                type="button"
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
