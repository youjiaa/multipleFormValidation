import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import './style.css'

export default function Signin() {
    return (
<Formik
        initialValues={{ firstName: "", lastName: "" }}
        validate={values => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
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
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="firstName" />
            <br />
            <ErrorMessage name="firstName" component="div" />
            <br />
            <Field type="text" name="lastName" />
            <br />
            <ErrorMessage name="lastName" component="div" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    )
}
