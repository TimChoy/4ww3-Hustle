import { Container, Nav, Navbar } from "react-bootstrap";
import { FaDumbbell } from 'react-icons/fa'
import '../Styles/Navigation.css';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/" aria-label="Homepage">
          <FaDumbbell size={30} style={{ fill: 'white' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Hustle</Nav.Link>
            <Nav.Link href="/contribute">Contribute a Gym</Nav.Link>
            <Nav.Link href="/review">Add a Review</Nav.Link>
          </Nav>
          <Nav className="right-nav">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
