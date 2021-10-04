import React from 'react'
import './style.css'
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Signin() {
  // const formik = useFormik({
  //   initialValues: { email: "" }, 
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   }
  // });
  return (
  <> 
     <h1>This is the Sign In Form</h1>
     <Formik 
      initialValues={{email: '', password: ''}}
      validate={values => {
        const errors = {};
        if(!values.email){
          errors.email = 'Email is Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.password){
          errors.password = 'Password is Required';
        } else if (
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/        
        ) {
          errors.password = 'Invalid password input';
        }
          return errors;
      }}

          onSubmit={({ setSubmitting }) => {
            alert('Form validated successfully')
            setSubmitting(false);
        }}
      >
      
      {({values, errors, touched, isSubmitting}) => (
        <Form>
          <label>Email:</label>
          <Field 
            type='email' 
            name='email' 
            placeholder='Enter email'
            className={`form-control ${
              touched.email && errors.email ? "is-invalid" : ""}`}
          />
          <ErrorMessage className='input-feedback' name='email' component='div' />
          <br />

          <label>Password:</label>
          <Field
            type="password"
            name="password"
            placeholder="Enter password"
            className={`form-control ${
              touched.password && errors.password ? "is-invalid" : ""}`}
          />
          <ErrorMessage className='input-feedback' name='password' component='div' />
          <br />
          <button type="submit" disabled={isSubmitting}>
              Submit
          </button>
        </Form>
      )}
    </Formik>
  </>
  );
}
