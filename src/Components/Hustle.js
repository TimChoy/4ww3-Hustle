import { Button, Col, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import '../Styles/Hustle.css';

function Hustle() {
  const history = useHistory();
  const handleOnClick = () => history.push('/search');

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
                <Dropdown.Item>4 Stars</Dropdown.Item>
                <Dropdown.Item>3 Stars</Dropdown.Item>
                <Dropdown.Item>2 Stars</Dropdown.Item>
                <Dropdown.Item>1 Star</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm="auto" className="overrideWidth">
              <Button
                size="lg"
                variant="primary"
                type="submit"
                onClick={handleOnClick}
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
