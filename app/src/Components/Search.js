import React, { useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import FooterNav from './Footer';
import Context from '../context';
import '../Styles/Search.css';
import Map from './Map';
import axios from 'axios';

function Search({ mapProps }) {
  const { data } = useContext(Context);
  const { setReviews } = useContext(Context);
  const history = useHistory();

  let locations = [];
  data[1].forEach(gym => {
    locations.push({ lat: gym.Latitude, lng: gym.Longitude, name: gym.GymName })
  })

  // Takes user location if given, or fixed location
  const latitude = (data[0] && data[0].latitude) ? data[0].latitude : 43.777702;
  const longitude = (data[0] && data[0].longitude) ? data[0].longitude : -79.233238;

  // If there is location data of the user, then add it to the list of locations
  if (data[0]) {
    const newLoc = { lat: latitude, lng: longitude, name: 'Your Location' };
    locations = [...locations, newLoc];
  }

  const addMarkers = links => map => {
    // Creates a single infowindow, will display information about various markers
    let infowindow = new window.google.maps.InfoWindow({});
    links.forEach((loc, index) => {
      let position = new window.google.maps.LatLng(loc.lat, loc.lng);
      // Different marker separating locations and user's location
      if (loc.name !== 'Your Location') {
        const marker = new window.google.maps.Marker({
          map,
          position: position,
          label: `${index + 1}`,
          title: loc.name,
          id: index + 1
        });
        const infoWindowContent =
          '<div>' +
          '<span style="font-weight: bold;">' + loc.name + '</span><div style="line-height: 50%;"><br/></div>' +
          '<span> Latitude: ' + loc.lat + '</span><br/>' +
          '<span> Longitude: ' + loc.lng + '</span><br/>' +
          '</div>';
        marker.addListener('click', () => {
          infowindow.setContent(infoWindowContent);
          infowindow.open(map, marker);
        });
      } else {
        const marker = new window.google.maps.Marker({
          map,
          position: position,
        });
        const infoWindowContent =
          '<div>' +
          '<span style="font-weight: bold;"> Your Location </span><div style="line-height: 50%;"><br/></div>' +
          '<span> Latitude: ' + loc.lat + '</span><br/>' +
          '<span> Longitude: ' + loc.lng + '</span><br/>' +
          '</div>';
        marker.addListener('click', () => {
          infowindow.setContent(infoWindowContent);
          infowindow.open(map, marker);
        });
      }
    })
  }

  mapProps = {
    options: { center: { lat: latitude, lng: longitude }, zoom: 13 },
    onMount: addMarkers(locations)
  };

  const handleOnClick = (gym) => {
    // Axios call to pull reviews from database
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    };
    let payload = {gymID: gym.GymID};
    console.log(payload);
    axios.post(process.env.REACT_APP_SERVER + '/reviews', payload, axiosConfig).then(resp => {
      let reviews = resp.data;
      setReviews([gym, reviews]);
      history.push('/item')
    }).catch(error => console.log('Unauthorized'));
  };

  const renderCard = (gym) => {
    if (!gym.Distance) {
      return (
        <Card as={Col} className='card'>
          <Card.Header className='d-flex justify-content-between'>
            <div>{gym.GymName}</div>
            <div>Rating: {gym.Rating}/5</div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{gym.GymName}</Card.Title>
            <Card.Text>
              <div>{gym.GymDesc}</div>
              <Button variant="primary" onClick={() => handleOnClick(gym)}>
                Reviews
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <Card as={Col} className='card'>
          <Card.Header className='d-flex justify-content-between'>
            <div>{gym.GymName}</div>
            <div>Rating: {gym.Rating}/5</div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{gym.GymName}</Card.Title>
            <Card.Text>
              <div>{gym.GymDesc}</div>
              <div>Distance: {gym.Distance.toFixed(2)}km</div>
              <Button variant="primary" onClick={() => handleOnClick(gym)}>
                Reviews
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
  }

  const noResults = () => {
    if (data[1].length == 0) {
      return (
        <Card as={Col} className='card'>
          <Card.Body>
            <Card.Title>No results found</Card.Title>
          </Card.Body>
        </Card>
      );
    }
  }

  const renderFooter = () => {
    if (data[1].length <= 1) {
      return (
        <div className="Fixed-bottom-search length-1">
          <FooterNav />
        </div>
      );
    } else {
      return (
        <div className="Fixed-bottom-search">
          <FooterNav />
        </div>
      );
    }
  }

  return (
    <div className="Search">
      <div className="map-div">
        <Map {...mapProps} />
      </div>
      <Row className="g-0 mb-4 max-width" xs={1} md={1}>
        {data[1].map(renderCard)}
        {noResults()}
      </Row>
      {renderFooter()}
    </div>
  );
}

export default Search;