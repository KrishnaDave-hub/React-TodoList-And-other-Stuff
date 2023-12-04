import React from 'react';
import { Formik } from 'formik';
import "bootstrap/dist/css/bootstrap.min.css";

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email && !values.password) {
            errors.both = 'Please Enter the values';  
        }else if (!values.email) {
          errors.email = 'Email Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }else if (!values.password) {
            errors.password = 'Password Required';
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
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-12">
                    <h1>Contact Us</h1>
                </div>
                <div className="col-4">
                    <form className="m-5 d-flex flex-column gap-2" onSubmit={handleSubmit}>
                    <span>{errors.both}</span>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Enter Your Email..."
                    />
                    <span className="error">{errors.email && touched.email && errors.email}</span>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Enter Your Password..."
                    />
                    <span className="error">{errors.password && touched.password && errors.password}</span>
                    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </form>
                </div>
            </div>
        </div>
      )}
    </Formik>
  </div>
);

export default Basic;