import React from 'react'
import './style.css'
import { useFormik } from "formik";

export default function Signin() {
  const formik = useFormik({
    initialValues: { email: "" }, 
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
 <> 
     <h1>This is the Sign In Form</h1>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        />
        
      <label>Password:</label>
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      <br />

      <button type="submit">Submit</button>
      </form>
      </>
  );
}
