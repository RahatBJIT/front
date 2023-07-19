import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>

            <Button className="mt-3 p-2" variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
