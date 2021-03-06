import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import FooterNav from './Footer'
import Context from '../context';
import '../Styles/Hustle.css';
import '../Styles/Register.css';
import '../Styles/Login.css';

// Validation schema for form
const schema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('Required'),
});

function Login() {
  const { setCredentials } = useContext(Context);
  const history = useHistory();
  // currently sends data to a modal to display to the user what was entered on the form
  const handleOnSubmit = (input) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    };
    let payload = input;
    axios.post(process.env.REACT_APP_SERVER + '/users/auth', payload, axiosConfig).then(resp => {
      setCredentials(resp.data);
      alert('Successfully logged in!');
      history.push('/');
    }).catch(error => {
      console.log('Unauthorized');
      alert('You have entered an invalid username/password combination.');
      window.location.reload();
    });
  }

  return (
    <div className="Register">
      <div className="Login">
        <h2> Login </h2>
        <Formik
          validationSchema={schema}
          onSubmit={handleOnSubmit}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="loginEmail">
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

              <Form.Group className="mb-3" controlId="loginPass">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                  placeholder="Password"
                />

                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
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

export default Login;