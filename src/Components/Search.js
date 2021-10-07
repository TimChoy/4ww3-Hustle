import '../App.css'
import React from 'react';
import googlemaps from '../Assets/googlemaps.png';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'


function Search() {
  
    return (
        <div className = "Search">
            <img src={googlemaps} alt="google maps of searched area" />

            <Card
                  bg={'Primary'.toLowerCase()}
                  text={'Primary'.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ width: '40rem' }}
                  className="mb-2"
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
                  bg={'Primary'.toLowerCase()}
                  text={'Primary'.toLowerCase() === 'light' ? 'dark' : 'white'}
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
                  bg={'Danger'.toLowerCase()}
                  text={'Danger'.toLowerCase() === 'light' ? 'dark' : 'white'}
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
                      <Button variant="light">Select</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>           

                <Card
                  bg={'Danger'.toLowerCase()}
                  text={'Danger'.toLowerCase() === 'light' ? 'dark' : 'white'}
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
                      <Button variant="light">Select</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>           
        </div> 
    );
}

export default Search;