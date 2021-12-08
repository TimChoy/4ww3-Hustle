import React, { useState } from 'react';
import { Button, Col, Form, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { BiCurrentLocation } from 'react-icons/bi'
import useGeolocation from 'react-hook-geolocation';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FooterNav from './Footer'
import '../Styles/Review.css';
import '../Styles/Register.css';

// Validation schema
const schema = Yup.object().shape({
  gym: Yup.string().required('Please choose a gym.'),
  rating: Yup.string().required('Please rate the gym.'),
  
});

function Review() {
  // state variables for form input
  const [gymInfo, setGymInfo] = useState({
    gym: '',
    rating: '',
    description: '',
  });

  const handleOnSubmit = (input) => {
    console.log(input);
    setGymInfo({
      gym: input.gym,
      rating: input.rating,
      comments: input.description,
    })
  }

  const geolocation = useGeolocation();

  return (
    <div className="Review">
      <div className="Input Review-form">
        <div>
          <h2>Add a Review!</h2>
          <Formik
            validationSchema={schema}
            onSubmit={handleOnSubmit}
            initialValues={{
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
                <Form.Group className="mb-3" >
                  <select
                    name="gym"
                    value={values.gym}
                    onChange={handleChange}
                    isValid={touched.gym && !errors.gym}
                    isInvalid={!!errors.gym}
                    style={{ display: 'block' }}
                  >
                    <option value="" label="Select a Gym" />
                    <option value="Goodlife Fitness" label="Goodlife Fitness" />
                    <option value="Snap Fitness" label="Snap Fitness" />
                    <option value="World Gym" label="World Gym" />
                    <option value="Fit4Less" label="Fit4Less" />
                  </select>
                  <Form.Control
                      value={values.gym}
                      onChange={handleChange}
                      isValid={touched.gym && !errors.gym}
                      isInvalid={!!errors.gym}
                    />
                  <Form.Control.Feedback type="invalid">
                      {errors.gym}
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
                <select
                    name="rating"
                    value={values.rating}
                    onChange={handleChange}
                    isValid={touched.rating && !errors.rating}
                    isInvalid={!!errors.rating}
                    style={{ display: 'block' }}
                  >
                    <option value="" label="Rating" />
                    <option value="1" label="1" />
                    <option value="2" label="2" />
                    <option value="3" label="3" />
                    <option value="4" label="4" />
                    <option value="5" label="5" />
                  </select>
                  <Form.Control
                      value={values.rating}
                      onChange={handleChange}
                      isValid={touched.rating && !errors.rating}
                      isInvalid={!!errors.rating}
                    />
                  <Form.Control.Feedback type="invalid">
                      {errors.rating}
                  </Form.Control.Feedback>
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
