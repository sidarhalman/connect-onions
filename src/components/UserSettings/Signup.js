import { TextField, Button, Box, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string, ref } from "yup";

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};

// const validateConfirmPassword = (pass, value) => {

//     let error = "";
//     if (pass && value) {
//       if (pass !== value) {
//         error = "Password not matched";
//       }
//     }
//     return error;
//   };
  

const Signup = () => {
    return(
        <div className="Signup">
        <Typography variant="h6">
        Sign up to become a onion :)
        </Typography>
        <Formik
        initialValues={initialValues}
        validationSchema={object({
            email: string().required('Please enter Email').email('Invalid Email'),
            name: string().required('Please enter your Name').min(2,"Name too short"),
            password: string().required('Please enter Password').min(8,"Password should be minimum 8 Characters").uppercase(1),
            confirmPassword: string().required('Please retype your Password').oneOf([ref('password'), null], 'Passwords must match')
        })}
        onSubmit={(values, formikHelpers) => {
            console.log(values);
            formikHelpers.resetForm();
        }}
        >
        {({ errors, isValid, touched, dirty }) => (
            <Form>
              <Field
                name="email"
                type="email"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Email"
                size="small"
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />
              <Box height={14} />
        
              <Field
              name="name"
              type="name"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Name"
              size="small"
              error={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
            />
            <Box height={10} />
            <Field
            name="password"
            type="password"
            as={TextField}
            variant="outlined"
            color="primary"
            label="Password"
            size="small"
            error={Boolean(errors.password) && Boolean(touched.password)}
            helperText={Boolean(touched.password) && errors.password}
          />
          <Box height={10} />
          <Field
          name="confirmPassword"
          type="password"
          as={TextField}
          variant="outlined"
          color="primary"
          label="Confirm Password"
          size="small"
          error={Boolean(errors.password) && Boolean(touched.password)}
          helperText={Boolean(touched.password) && errors.password}
        />
        <Box height={10} />
          <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={!isValid || !dirty}
        >
          Sign up
        </Button>
        </Form>
        )}
        </Formik>
        </div>
    );
};

export default Signup;