import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import './style.css'

export default function Account() {
    return (
    <div>
        <h1>This is a user account form</h1>
    <Formik
      initialValues={{ card: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        card: Yup.string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(16, 'Enter a valid card number')
            .max(16, 'Enter a valid card number'),
        month: Yup.string()
          .required()
          .matches(/^[0-9]{1,2}$/, 'Enter a valid month')
            .test(
                'is valid month?',
                'Enter a valid month',
                (value) => value <= 12 && value >= 1
            ),
        year: Yup.string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(4, 'Enter a valid year')
            .max(4, 'Enter a valid year'),
        pin: Yup.string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(3, 'Enter a valid pin')
            .max(3, 'Enter a valid pin'),
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isValid,dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          setFieldValue
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="card" style={{ display: "block" }}>
              Card Number
            </label>
            <input
              id="card"
              placeholder="Enter your credit card number"
              type="text"
              value={values.card}
              onChange={handleChange}
              onBlur={handleBlur}
                className={
                  errors.card && touched.card
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.card && touched.card && (
                <div className="input-feedback">{errors.card}</div>
              )}
                
            <label style={{ display: "block" }}>
              Month
            </label>
            <input
              id="month"
              placeholder="Enter month"
            type="number"
              value={values.month}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.month && touched.month
                  ? "text-input error"
                  : "text-input"
              }
                />
              {errors.month && touched.month && (
                <div className="input-feedback">{errors.month}</div>
              )}    

            <label style={{ display: "block" }}>
              Year
            </label>
            <input
              id="year"
              placeholder="Enter year"
              type="text"
              value={values.year}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.year && touched.year
                  ? "text-input error"
                  : "text-input"
              }
                />
              {errors.year && touched.year && (
                <div className="input-feedback">{errors.year}</div>
                )}
                
            <label style={{ display: "block" }}>
              Pin
            </label>
            <input
              id="pin"
              placeholder="Enter your pin"
              type="text"
              value={values.pin}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.pin && touched.pin
                  ? "text-input error"
                  : "text-input"
              }
                />
              {errors.pin && touched.pin && (
                <div className="input-feedback">{errors.pin}</div>
              )}
            
            <button type="submit" disabled={!(isValid)}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
        </div>
    )
}
