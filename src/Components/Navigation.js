import { Container, Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";
import '../Styles/Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Hustle</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="d-flex" >
                        <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
                        <Button variant="outline-success" >Search</Button>
                    </Form>
                    <Nav className="right-nav">
                        <Nav.Link href="/search">Login</Nav.Link>
                        <Nav.Link href="#register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;