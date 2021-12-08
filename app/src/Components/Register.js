import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FooterNav from './Footer'
import '../Styles/Hustle.css';
import '../Styles/Register.css';

// Validation schema for form
const schema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed in this field')
    .required('Required'),
  lastName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed in this field')
    .required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('Required'),
  terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

function Register() {
  // currently sends data to a modal to display to the user what was entered on the form
  const handleOnSubmit = (input) => {
    console.log(input);
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    };
    // TODO Clean up code in case of problem
    let payload = input;
    axios.post(process.env.REACT_APP_SERVER + '/users', payload, axiosConfig).then(resp => {
      console.log(resp.data)
    }).catch(error => console.log('Bad Request'));
  }

  return (
    <div className="Register">
      <div className="Input">
        <h2> Register </h2>
        <Formik
          validationSchema={schema}
          onSubmit={handleOnSubmit}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            terms: false,
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}> { /* Form for registration */}
              <Row className="mb-2">
                <Form.Group as={Col} controlId="registerFName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={!!errors.firstName}
                    placeholder="First Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="registerLName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={!!errors.lastName}
                    placeholder="Last Name"
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="registerEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                  placeholder="Email"
                />

                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerPass">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                  placeholder="New password"
                />

                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" id="registerCheckbox">
                <Form.Check
                  required
                  name="terms"
                  label="I agree to the terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="Fixed-bottom">
        <FooterNav />
      </div>
    </div>
  );
}

export default Register;