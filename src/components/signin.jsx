import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import './style.css';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const WithmaterialUI = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate('/login')
    },
  });

  return (<>

    <fieldset className="feildSignin">
      <legend> SignIn</legend>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          className="input"
          label="FirstName"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          className="input"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="lastName"
          name="lastName"
          className="input"
          label="LastName"
          type="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />  <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          className="input"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />  <TextField
          id="confirmpassword"
          name="confirmpassword"
          label="ConfirmPassword"
          className="input"
          type="password"
          value={formik.values.confirmpassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
          helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
        />
        <Button className="signbtn" type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </fieldset>
  </>
  );
};
export default WithmaterialUI;
