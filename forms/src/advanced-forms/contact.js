import React from 'react'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import './style.css'

export default function Contact() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <>
      <h1>This is the Contact Me Form</h1>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", phone: "", messageBox: "" }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}

        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required("Required"),
          lastName: Yup.string()
            .required("Required"),
          email: Yup.string()
            .email()
            .required("Required"),
          phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .nullable(),
          messageBox: Yup.string()
            .nullable()
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              {/* first name form */}
              <label htmlFor="firstName" style={{ display: "block" }}>
                First Name
              </label>
              <input
                id="firstName"
                placeholder="Enter your first name"
                type="text"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.firstName && touched.firstName
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.firstName && touched.firstName && (
                <div className="input-feedback">{errors.firstName}</div>
              )}

              {/* last name form */}
              <label htmlFor="last name" style={{ display: "block" }}>
                Last Name
              </label>
              <input
                id="last name"
                placeholder="Enter your last name"
                type="text"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.lastName && touched.lastName
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.lastName && touched.lastName && (
                <div className="input-feedback">{errors.lastName}</div>
              )}

              {/* email form */}
              <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              {/* phone number, not a required input */}
              <label htmlFor="phone" style={{ display: "block" }}>
                Phone Number
              </label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                type="text"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.phone && touched.phone
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.phone && touched.phone && (
                <div className="input-feedback">{errors.phone}</div>
              )}

              {/* message box, not a required input */}
              <label htmlFor="message" style={{ display: "block" }}>
                Message Box
              </label>
              <textarea
                id="message"
                placeholder="Enter your message here"
                type="text"
                value={values.messageBox}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="10"
                className={
                  errors.messageBox && touched.messageBox
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.messageBox && touched.messageBox && (
                <div className="input-feedback">{errors.messageBox}</div>
              )}

              {/* submit buttons */}
              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>

            </form>
          );
        }}
      </Formik>
    </>
  )
} s