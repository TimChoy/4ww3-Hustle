import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FooterNav from './Footer'
import '../Styles/Hustle.css';
import '../Styles/Login.css';

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

function Login() {
  // state variables for form input
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    history.push('/');
  }

  // currently sends data to a modal to display to the user what was entered on the form
  const handleOnSubmit = (input) => {
    console.log(input);
    setUserInfo({
      firstName: input.fname,
      lastName: input.lname,
      email: input.email,
      password: input.password,
    })
    handleShow();
  }

  return (
    <div className="Login">
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          First Name: {userInfo.firstName} <br />
          Last Name: {userInfo.lastName} <br />
          Email: {userInfo.email} <br />
          Password: {userInfo.password}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;