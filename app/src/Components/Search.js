import React, { useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import FooterNav from './Footer';
import Context from '../context';
import '../Styles/Search.css';
import '../Styles/Hustle.css';
import Map from './Map';

function Search({ mapProps }) {
  const { data } = useContext(Context);
  const history = useHistory();
  const handleOnClick = () => history.push('/item');

  let locations = [
    { lat: 43.760184874119524, lng: -79.22848806953778, name: 'Fit4Less' },
    { lat: 43.75957, lng: -79.22624, name: 'Goodlife Fitness: Cedarbrae Mall' },
    { lat: 43.77714113246414, lng: -79.24931225786676, name: 'World Gym' },
    { lat: 43.80145785954532, lng: -79.19827247757445, name: 'Snap Fitness' },
  ];

  // Takes user location if given, or fixed location
  const latitude = (data && data.latitude) ? data.latitude : 43.777702;
  const longitude = (data && data.longitude) ? data.longitude : -79.233238;

  // If there is location data of the user, then add it to the list of locations
  if (data) {
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
          '<a href=\'./Item\'> Click here for more information </a>' +
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

  return (
    <div className="Hustle Search">
      <div className="map-div">
        <Map {...mapProps} />
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
      <div className="Fixed-bottom-search">
        <FooterNav />
      </div>
    </div>
  );
}

export default Search;