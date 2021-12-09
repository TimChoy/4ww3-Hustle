import React, { useState, useEffect, useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FooterNav from './Footer'
import Context from '../context';
import '../Styles/Login.css';
import '../Styles/Register.css';

// Validation schema
const schema = Yup.object().shape({
  gym: Yup.number().required('Please select a gym')
    .min(0, 'Please select a gym'),
  review: Yup.string().required('Please submit a review'),
  rating: Yup.number().required('Please rate the gym')
    .typeError('Please rate the gym')
    .min(0, 'Please rate the gym'),
});

function Review() {
  const { credentials } = useContext(Context);
  const history = useHistory();
  // state variables for form input
  const [gymList, setGymList] = useState([]);

  useEffect(() => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    };
    let payload = { lat: null, lng: null };
    axios.post(process.env.REACT_APP_SERVER + '/gyms', payload, axiosConfig).then(resp => {
      let gyms = resp.data.map((item) => { return { GymID: item.GymID, GymName: item.GymName } });
      setGymList(gyms);
    })
  }, []);

  const handleOnSubmit = (input) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    };
    let payload = {
      review: input.review,
      rating: input.rating,
      gymID: input.gym,
      userID: credentials.userId
    };
    axios.post(process.env.REACT_APP_SERVER + '/reviews/add', payload, axiosConfig).then(resp => {
      alert('Successfully added review');
      history.push('/');
    }).catch(error => {
      console.log('Bad Request');
      alert('Bad Request');
      window.location.reload();
    });
  }

  const renderGyms = (gymList) => {
    let renders = [];
    for (let [key, val] of Object.entries(gymList)) {
      renders.push(
        <option key={val.GymID} value={val.GymID}>{val.GymName}</option>
      )
    };
    return renders;
  }

  return (
    <div className="Register">
      <div className="Login">
        <div>
          <h2>Add a Review!</h2>
          <Formik
            validationSchema={schema}
            onSubmit={handleOnSubmit}
            initialValues={{
              gym: -1,
              review: '',
              rating: -1
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              errors
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" id="selectedGym">
                  <Form.Select
                    name="gym"
                    value={values.gym}
                    isValid={touched.gym && !errors.gym}
                    isInvalid={!!errors.gym}
                    onChange={handleChange}
                  >
                    <option value={-1}>Select a Gym</option>
                    {renderGyms(gymList)}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.gym}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="review">
                  <Form.Label>Review</Form.Label>
                  <Form.Control
                    name="review"
                    value={values.review}
                    onChange={handleChange}
                    as="textarea"
                    isValid={touched.review && !errors.review}
                    isInvalid={!!errors.review}
                    placeholder="Enter your review"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.review}
                  </Form.Control.Feedback>
                </Form.Group>
                <Row className="justify-content-between">
                  <Col sm="auto" className="overrideWidth">
                    <Form.Select
                      name="rating"
                      value={values.rating}
                      onChange={handleChange}
                      isValid={touched.rating && !errors.rating}
                      isInvalid={!!errors.rating}
                    >
                      <option value="-1">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Form.Select>
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
      <div className="Fixed-bottom">
        <FooterNav />
      </div>
    </div>
  );
}

export default Review;
