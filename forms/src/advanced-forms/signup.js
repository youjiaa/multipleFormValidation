import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import './style.css'

export default function Signup() {
  return (
    <>
      <h1>This is the Sign Up Form</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "" , email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "firstName is Required";
          }
          if (!values.lastName) {
            errors.lastName = "lastName is Required";
          }
           if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({          values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit, isSubmitting }) => (
          <Form>
            <label>First Name:</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
            <br />

            <label>Last Name:</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
            <br />

            <label>Email:</label>
             <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
            {errors.email && touched.email && errors.email}
            <br />

            <label>Password:</label>
            <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
            {errors.password && touched.password && errors.password}
            <br />

            <label>Re-enter Password:</label>
            <Field type="password" name="re-password" />
            <br />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}
