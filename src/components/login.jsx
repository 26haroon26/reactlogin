import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./style.css";
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

const WithMaterialUI = () => {
    const navigate = useNavigate();

    const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        console.log(values);
            navigate('/dashboard')
    },
  });

//   let handleSubmit = ()=>{
        //     navigate('/dashboard')

//   }
  return (
    <div>
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
           <Button className="loginbtn" type="submit" variant="contained">
            Submit
          </Button>
          {/* <button className="loginbtn" variant="contained"  onClick={handleSubmit}>
            Submit
          </button> */}
        </form>
      </fieldset>
    </div>
  );
};
export default WithMaterialUI;
