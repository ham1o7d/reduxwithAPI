import React from 'react';
import { useFormik } from 'formik';
import {signinValidate as validate} from '../Validation/SignIn.Validation'
// import {validate} from '../Validation/formik.validation'
const SignIn = () => {
 
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    
    validate,
    onSubmit: (values) => {
      console.log('alert(JSON.stringify(values, null, 2));',values)
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName && <div style={{color: 'red'}}>{formik.errors.firstName}</div> }
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <br />


      {formik.errors.lastName && <p style={{color: 'red'}} >{formik.errors.lastName}</p> }

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <p style={{color: 'red'}}>{formik.errors.email}</p> }
      <br />
      <label htmlFor="email">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && <p style={{color: 'red'}}>{formik.errors.password}</p> }

      <br />
      <label htmlFor="email">Confirm Password</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        
      />
      {formik.errors.confirmPassword && <p style={{color: 'red'}}>{formik.errors.confirmPassword}</p> }

      <br />
      {formik.errors.isMatchedPassword && <p style={{color: 'red'}}>{formik.errors.isMatchedPassword}</p> }

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignIn;