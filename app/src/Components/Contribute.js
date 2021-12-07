import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
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
  lat: Yup.number()
    .min(-90, 'Minimum latitude is -90')
    .max(90, 'Maximum latitude is 90')
    .required('Please enter a valid number')
    .typeError('Please enter a valid number'),
  lng: Yup.number()
    .min(-180, 'Minimum longitude is -180')
    .max(80, 'Maximum longitude is 80')
    .required('Please enter a valid number')
    .typeError('Please enter a valid number'),
  file: Yup.mixed().required('A file is required'),
});

function Contribute() {
  const geolocation = useGeolocation();
  // state variables for form input
  const [gymInfo, setGymInfo] = useState({
    gymName: '',
    description: '',
    lat: NaN,
    lng: NaN,
    file: '',
  });

  const handleOnSubmit = (input) => {
    console.log(input);
    setGymInfo({
      gymName: input.gymName,
      description: input.description,
      lat: input.lat,
      lng: input.lng,
      file: input.file,
    })
  }

  return (
    <div className="Contribute">
      <div className="Input Contribute-form">
        <div>
          <h2>Contribute a Gym!</h2>
          <Formik
            validationSchema={schema}
            onSubmit={handleOnSubmit}
            initialValues={{
              gymName: '',
              description: '',
              lat: NaN,
              lng: NaN,
              file: '',
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
                  <Form.Label>Description (Optional)</Form.Label>
                  <Form.Control
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    as="textarea"
                    placeholder="Description" 
                  />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="gymLat">
                    <Form.Label>Latitude</Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      name="lat"
                      value={values.lat}
                      onChange={handleChange}
                      isValid={touched.lat && !errors.lat}
                      isInvalid={!!errors.lat}
                      placeholder="Latitude"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lat}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="gymLong">
                    <Form.Label>Longitude</Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      name="lng"
                      value={values.lng}
                      onChange={handleChange}
                      isValid={touched.lng && !errors.lng}
                      isInvalid={!!errors.lng}
                      placeholder="Longitude"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lng}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="gymFile">
                  <Form.Label>Images</Form.Label>
                  <Form.Control 
                    type="file"
                    name="file"
                    value={values.file}
                    onChange={handleChange}
                    isValid={touched.file && !errors.file}
                    isInvalid={!!errors.file}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.file}
                  </Form.Control.Feedback>
                </Form.Group>
                <Row className="justify-content-between">
                  <Col className="overrideWidth">
                    <Button
                      variant="primary"
                      type="button"
                      onClick={() => { // There is some issue with validation taking previous values
                        setFieldTouched('lat', true, false);
                        setFieldTouched('lng', true, false);
                        setFieldValue('lng', geolocation.longitude, true);
                        setFieldValue('lat', geolocation.latitude, true);
                      }}
                    >
                      <BiCurrentLocation/>
                    </Button>
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

export default Contribute;
