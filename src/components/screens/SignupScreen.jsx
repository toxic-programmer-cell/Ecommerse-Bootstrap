import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignupScreen = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    gender: "",
    password: "",
    confirmpassword: "",
    termsAgree: false,
  });

  const [formError, setFormError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    gender: "",
    password: "",
    confirmpassword: "",
    termsAgree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type == "checkbox" ? checked : value;

    setFormValues({
      ...formValues,
      [name]: newValue,
    });

    validateForm(name, newValue);
  };

  const isValidForm = () => {
    return (
      Object.value(formError).every((error) => error === null) &&
      Object.value(formValues).every((value) => value !== "" && value !== false)
    );
  };

  const formValidateClass = (name) => {
    if (formValues[name] === "") return "";
    return formError[name] ? "is-invalid" : "is-valid";
  };

  const validateForm = (name, value) => {
    let errorMessage = null;

    switch (name) {
      case "firstname":
      case "lastname":
        if (!value) {
          errorMessage = "This field is required.";
        }
        break;

      case "email":
        const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRgx.test(value)) {
          errorMessage = "Invalid email";
        }
        break;

      case "phoneNumber":
        const phoneRgx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        if (!value && !phoneRgx.test(value)) {
          errorMessage = "Invalid phone number";
        }
        break;

      case "gender":
        if (!value) {
          errorMessage = "This field is required";
        }
        break;

      case "password":
        if (!value && value < 6) {
          errorMessage = "Password must have at least 6 digit";
        }
        break;

      case "confirmpassword":
        if (value !== formValues.password) {
          errorMessage = "Confirm password must be equal to password";
        }
        break;

      case "termsAgree":
        if (!value) {
          errorMessage = "Agree to terms and conditions";
        }
        break;

      default:
        break;
    }

    setFormError({
      ...formError,
      [name]: errorMessage,
    });
  };

  return (
    <>
      <Link to={"/"} className="btn btn-dark my-3">
        {" "}
        {"\u2190"} Back{" "}
      </Link>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Form>
              <br />
              <h2 className="text-center">Register</h2>

              <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={formValues.firstname}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  isInvalid={!!formError.firstname}
                  className={formValidateClass("firstname")}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.firstname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={formValues.lastname}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  isInvalid={!!formError.lastname}
                  className={formValidateClass("lastname")}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.lastname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  isInvalid={!!formError.email}
                  className={formValidateClass("email")}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="number">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  isInvalid={!!formError.phoneNumber}
                  className={formValidateClass("phoneNumber")}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Select
                aria-label="gender"
                name="gender"
                value={formValues.gender}
                onChange={handleChange}
                isInvalid={!!formError.gender}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formError.gender}
              </Form.Control.Feedback>

              <Form.Group className="my-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  isInvalid={formError.password}
                  className={formValidateClass("password")}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="confirmpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmpassword"
                  value={formValues.confirmpassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  isInvalid={formError.confirmpassword}
                  className={formValidateClass("confirmpassword")}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.confirmpassword}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Check
                  type="checkbox"
                  name="termsAgree"
                  checked={formValues.termsAgree}
                  onChange={handleChange}
                  id={`default-checkbox`}
                  label="Agree to terms & condition"
                  isInvalid={formError.termsAgree}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.termsAgree}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid mt-2">
                <Button variant="success" size="md" disabled={!isValidForm}>
                  Register
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupScreen;
