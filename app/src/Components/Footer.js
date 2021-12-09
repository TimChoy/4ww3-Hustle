import React, { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Context from '../context';

function Footer() {
    const { credentials } = useContext(Context);
    if (!credentials) {
        return (
            <Navbar bg="dark" variant="dark">
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
    } else {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-between">
                        <Navbar.Text>
                            SFWRENG 4WW3: Web Systems and Web Computing
                        </Navbar.Text>
                        <Navbar.Text>
                            {`${credentials.firstName} ${credentials.lastName}`}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;
