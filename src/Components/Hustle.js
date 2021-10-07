import { Form, Row, Col, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import '../Styles/Hustle.css';

function Hustle() {
  return (
    <div className="Hustle">
      <div className="Box">
        <h1>Find Your Best Workout</h1>
        <Form className="w-20">
          <Row className="mb-2">
            <Col fluid>
              <Form.Control size="lg" placeholder="Search" />
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col className="overrideWidth">
              <DropdownButton size="lg" title="Rating"> {/* Potential to add props to this button title */}
                <Dropdown.Item>5 Stars</Dropdown.Item>
                <Dropdown.Item>4+ Stars</Dropdown.Item>
                <Dropdown.Item>3+ Stars</Dropdown.Item>
                <Dropdown.Item>2+ Stars</Dropdown.Item>
                <Dropdown.Item>1+ Stars</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm="auto" className="overrideWidth">
              <Button
                size="lg"
                variant="primary"
                type="submit"
                as={Link}
                to='/search'
              >
                <FaSearch />
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default Hustle;
