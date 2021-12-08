import { useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaDumbbell } from 'react-icons/fa'
import { useHistory } from "react-router-dom";
import Context from '../context';
import '../Styles/Navigation.css';

function Navigation() {
  const { credentials, setCredentials } = useContext(Context);
  const history = useHistory();
  const logout = () => {
    setCredentials(null);
  }

  console.log('Logged in:', !!credentials);
  if (!credentials) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Button} variant='dark' onClick={() => history.push('/')} aria-label="Homepage">
            <FaDumbbell size={30} style={{ fill: 'white' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Button variant='dark' type='button' onClick={() => history.push('/')}>Hustle</Button>
            </Nav>
            <Nav className="right-nav">
              <Button variant='dark' type='button' onClick={() => history.push('/login')}>Login</Button>
              <Button variant='dark' type='button' onClick={() => history.push('/register')}>Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
        <Navbar.Brand as={Button} variant='dark' onClick={() => history.push('/')} aria-label="Homepage">
            <FaDumbbell size={30} style={{ fill: 'white' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Button variant='dark' type='button' onClick={() => history.push('/')}>Hustle</Button>
              <Button variant='dark' type='button' onClick={() => history.push('/contribute')}>Contribute a Gym</Button>
              <Button variant='dark' type='button' onClick={() => history.push('/review')}>Add a Review</Button>
            </Nav>
            <Nav className="right-nav">
              <Button variant='dark' type='button' onClick={logout}>Log Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
