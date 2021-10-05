import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./style.css";
import * as Yup from "yup";

export default function Signup() {
  return (
    <>
      <h1>This is the Sign Up Form</h1>
      <Formik
        initialValues={{
          firstName: "Patrick",
          lastName: "",
          email: "",
          password: "",
          rePassword: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "first name is Required";
          }
          if (!values.lastName) {
            errors.lastName = "last name is Required";
          }
          if (!values.email) {
            errors.email = "email is Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .required("Password is required")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
          rePassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {/* render prop */}
        {({ isValid }) => (
          <Form>
            <label>First Name:</label>
            <Field
              type="text"
              name="firstName"
              // onChange={(event) => alert(event.target.value)}
            />
            <ErrorMessage
              className="input-feedback"
              name="firstName"
              component="div"
            />
            <br />

            <label>Last Name:</label>
            <Field type="text" name="lastName" />
            <ErrorMessage
              className="input-feedback"
              name="lastName"
              component="div"
            />
            <br />

            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage
              className="input-feedback"
              name="email"
              component="div"
            />
            <br />

            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage
              className="input-feedback"
              name="password"
              component="div"
            />
            <br />

            <label>Re-enter Password:</label>
            <Field type="password" name="rePassword" />
            <ErrorMessage
              className="input-feedback"
              name="rePassword"
              component="div"
            />
            <br />
            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
