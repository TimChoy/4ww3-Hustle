import { Container, Navbar } from "react-bootstrap";

function Footer() {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-between">
                    <Navbar.Text>
                        SFWRENG 4WW3: Web Systems and Web Computing
                    </Navbar.Text>
                    <Navbar.Text>
                        Not signed in
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;
