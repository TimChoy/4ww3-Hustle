import React, { useState } from 'react';
import { Button, Col, Form, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { BiCurrentLocation } from 'react-icons/bi'
import useGeolocation from 'react-hook-geolocation';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FooterNav from './Footer'
import '../Styles/Contribute.css';
import '../Styles/Register.css';

// Validation schema
const schema = Yup.object().shape({
  gymName: Yup.string().required('Required'),
  
});

function Review() {
  const geolocation = useGeolocation();
  // state variables for form input
  const [gymInfo, setGymInfo] = useState({
    gymName: '',
    description: '',
  });

  const handleOnSubmit = (input) => {
    console.log(input);
    setGymInfo({
      gymName: input.gymName,
      comments: input.description,
    })
  }

  const [rating, setRating] = useState('Rating');

  return (
    <div className="Contribute">
      <div className="Input Contribute-form">
        <div>
          <h2>Add a Review!</h2>
          <Formik
            validationSchema={schema}
            onSubmit={handleOnSubmit}
            initialValues={{
              gymName: '',
              comments: '',
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              errors,
              setFieldValue,
              setFieldTouched,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="gymName">
                  <Form.Label>Gym Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="gymName"
                    value={values.gymName}
                    onChange={handleChange}
                    isValid={touched.gymName && !errors.gymName}
                    isInvalid={!!errors.gymName}
                    placeholder="Gym Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.gymName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="gymDesc">
                  <Form.Label>Comments (Optional)</Form.Label>
                  <Form.Control
                    name="comments"
                    value={values.comments}
                    onChange={handleChange}
                    as="textarea"
                    placeholder="Comments" 
                  />
                </Form.Group>
                <Row className="justify-content-between">
                <Col className="overrideWidth">
                    <Form.Group className ="mb-3" controlId="ratebtn" >
                            <DropdownButton size="lg" title={rating}> {/* Potential to add props to this button title */}
                                <Dropdown.Item onClick={() => setRating('5 Stars')}>5 Stars</Dropdown.Item>
                                <Dropdown.Item onClick={() => setRating('4 Stars')}>4 Stars</Dropdown.Item>
                                <Dropdown.Item onClick={() => setRating('3 Stars')}>3 Stars</Dropdown.Item>
                                <Dropdown.Item onClick={() => setRating('2 Stars')}>2 Stars</Dropdown.Item>
                                <Dropdown.Item onClick={() => setRating('1 Star')}>1 Star</Dropdown.Item>
                            </DropdownButton>
                    </Form.Group>
                 </Col>
                  <Col sm="auto" className="overrideWidth">
                    <Button
                      variant="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="Fixed-bottom mobile-override">
        <FooterNav />
      </div>
    </div>
  );
}

export default Review;
