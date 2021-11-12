import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FooterNav from './Footer'
import '../Styles/Contribute.css';
import '../Styles/Login.css';

const schema = Yup.object().shape({
  gymName: Yup.string().required('Required'),
  lat: Yup.number()
    .min(-90, 'Minimum latitude is -90')
    .max(90, 'Maximum latitude is 90')
    .required('Please enter a valid number'),
  lng: Yup.number()
    .min(-180, 'Minimum longitude is -180')
    .max(80, 'Maximum longitude is 80')
    .required('Please enter a valid number'),
  file: Yup.mixed().required('A file is required'),
});

function Contribute() {
  // state variables for form input
  const [gymInfo, setGymInfo] = useState({
    gymName: '',
    description: '',
    lat: NaN,
    lng: NaN,
    file: '',
  });
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    history.push('/');
  }

  const handleOnSubmit = (input) => {
    console.log(input);
    setGymInfo({
      gymName: input.gymName,
      description: input.description,
      lat: input.lat,
      lng: input.lng,
      file: input.file,
    })
    handleShow();
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="Fixed-bottom">
        <FooterNav />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Gym Name: {gymInfo.gymName} <br />
          Description: {gymInfo.description} <br />
          Latitude: {gymInfo.lat} <br />
          Longitude: {gymInfo.lng} <br />
          Attachments: {gymInfo.file}
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

export default Contribute;
