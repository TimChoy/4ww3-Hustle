import React from 'react';
import googlemaps from '../Assets/true_map.png';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import '../Styles/Search.css';

function Search() {
  
    return (
        <div className = "Search">
            <img src={googlemaps} alt="google maps of searched area" className = "centre" />
            <CardGroup>
                <Card
                  bg={'Dark'.toLowerCase()}
                  text={'Dark'.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ width: '40rem' }}
                  className="cards"
                >
                  <Card.Header>Fitness Centre</Card.Header>
                  <Card.Body>
                    <Card.Title>Snap Fitness</Card.Title>
                    <Card.Text>
                      Address: 8130 Sheppard Avenue East Suite 108 and 109 <br/>
                      Distance: 10.5km <br/>
                      Rating: 4.6/5.0 <br/>
                      <br/>
                      <Button variant="light">Select</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>     

                <Card
                  bg={'Light'.toLowerCase()}
                  text={'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ width: '40rem' }}
                  className="cards"
                >
                  <Card.Header>Gym</Card.Header>
                  <Card.Body>
                    <Card.Title> GoodLife Fitness Scarborough Cedarbrae Mall </Card.Title>
                    <Card.Text>
                      Address: 3495 Lawrence Avenue East, Scarborough, ON<br/>
                      Distance: 5.2km<br/>
                      Rating: 3.9/5.0<br/>
                      <br/>
                      <Button variant="dark">Select</Button>
                    </Card.Text>
                  </Card.Body>
                </Card> 

                <Card
                  bg={'Dark'.toLowerCase()}
                  text={'Dark'.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ width: '40rem' }}
                  className="cards"
                >
                  <Card.Header>Fitness Centre</Card.Header>
                    <Card.Body>
                      <Card.Title>World Gym</Card.Title>
                        <Card.Text>
                          Address: 1455 McCowan Road, Scarborough, ON <br/>
                          Distance: 8.2km <br/>
                          Rating: 3.6/5.0<br/>
                          <br/>
                          <Button variant="light">Select</Button>
                        </Card.Text>
                  </Card.Body>
                </Card>              

                <Card
                  bg={'Light'.toLowerCase()}
                  text={'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ width: '40rem' }}
                  className="cards" 
                  >
                  <Card.Header>Gym</Card.Header>
                    <Card.Body>
                      <Card.Title> Fit4Less </Card.Title>
                        <Card.Text>
                          Address: 3434 Lawrence Avenue East, Scarborough, ON<br/>
                          Distance: 2.7km<br/>
                          Rating: 3.9/5.0<br/>
                          <br/>
                          <Button 
                          variant="primary"
                          type="submit"
                          as={Link}
                          to='/item'
                          > Select
                          </Button>
                        </Card.Text>
                    </Card.Body>
                  </Card>
              </CardGroup>           
        </div> 
    );
}

export default Search;