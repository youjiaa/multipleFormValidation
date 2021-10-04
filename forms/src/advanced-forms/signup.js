import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import './style.css'
import * as Yup from 'yup';

export default function Signup() {
  return (
    <>
      <h1>This is the Sign Up Form</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "" , email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "first name is Required";
          }
          if (!values.lastName) {
            errors.lastName = "last name is Required";
          }
           if (!values.email) {
           errors.email = 'email is Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
          return errors;
        }}

        validationSchema={Yup.object({
          password: Yup.string().required('Password is required')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
          rePassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
        })}

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
            <ErrorMessage className="input-feedback" name="firstName" component="div" />
            <br />

            <label>Last Name:</label>
            <Field type="text" name="lastName" />
            <ErrorMessage className="input-feedback" name="lastName" component="div" />
            <br />

            <label>Email:</label>
             <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
            />
            <div className="input-feedback">{errors.email && touched.email && errors.email}</div>
            
            <br />

            <label>Password:</label>
            <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
            />
            <div className="input-feedback">
            {errors.password && touched.password && errors.password}
            </div>
            <br />

            <label>Re-enter Password:</label>
            <Field type="password" name="rePassword" />
            {errors.rePassword && touched.rePassword && (
                <div className="input-feedback">{errors.rePassword}</div>
              )}   
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
