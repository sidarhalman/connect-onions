import React, {useState } from 'react';
import Searchbar from './Searchbar';
import { Card, CardContent, Typography, Divider, Button , Box, Grid, Step, StepLabel, Stepper, CircularProgress} from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-mui'
import { mixed, number, object, array } from 'yup';

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export default function Products() {
    return (
    
    <div className='App'>
    <h1>products</h1>
        <Searchbar />
        <Divider />
        <Card>
            <CardContent>
            <FormikStepper
                initialValues={{
                ProductName: '',
                Price: '',
                ProductDescription: '',
                PaymentCash: '',
                PaymentPaypal: '',
                PaymentBank: '',
                PaymentFree: '',
                ProductPhoto : []
            }} onSubmit={async (values) => {
                await sleep(3000);
                console.log('values', values);
            }}>
           
            <FormikStep>
            <Box paddingBottom={2}>
            <Field name="ProductName" component={TextField} label="Product Name" />
            </Box>
            <Box paddingBottom={2}>
            <Field name="Price" component={TextField} label="Price" />
            </Box>
            </FormikStep>
            <Box paddingBottom={2}>
                <Field name="ProductDescription" component={TextField} label="Product Description" />
                </Box>
                
                <FormikStep>
                <Box paddingBottom={2}>
                    <label>
                    <Field name="PaymentCash" type='checkbox' component={CheckboxWithLabel} Label={{ label: 'Cash'}}  />
                    </label>   
                    <label>
                    <Field name="PaymentPaypal" type='checkbox' component={CheckboxWithLabel} Label={{ label: 'Paypal'}}  />
                    </label>  
                    <label>
                    <Field name="PaymentBank" type='checkbox' component={CheckboxWithLabel} Label={{ label: 'Bank Transfer'}}  />
                    </label>   
                    <label>
                    <Field name="PaymentFree" type='checkbox' component={CheckboxWithLabel} Label={{ label: 'For Free'}}  />
                    </label> 
                    </Box>
                    </FormikStep>
           
            <FormikStep>
            <Field name="ProductPhoto" component={TextField} label="Product Photo" />
            </FormikStep>
            
           
            </FormikStepper>       
        
            </CardContent>
        
        </Card>
    </div>

    
    );
};



// export interface FormikStepProps extends Pick <FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
// }




export function FormikStep({ children}) {
return (
    <div>{children}</div>
)
}

export function FormikStepper({ children, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState(false);
  
    function isLastStep() {
      return step === childrenArray.length - 1;
    }

   

    return (
        <Formik
          {...props}
          validationSchema={currentChild.props.validationSchema}
          onSubmit={async (values, helpers) => {
            if (isLastStep()) {
              await props.onSubmit(values, helpers);
              setCompleted(true);
            } else {
              setStep((s) => s + 1);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="off">
              <Stepper alternativeLabel activeStep={step}>
                {childrenArray.map((child, index) => (
                  <Step
                    key={child.props.label}
                    completed={step > index || completed}
                  >
                    <StepLabel>{child.props.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
    
              {currentChild}
    
              <Grid container spacing={2}>
                {step > 0 ? (
                  <Grid item>
                    <Button
                      disabled={isSubmitting}
                      variant="contained"
                      color="primary"
                      onClick={() => setStep((s) => s - 1)}
                    >
                      Back
                    </Button>
                  </Grid>
                ) : null}
                <Grid item>
                  <Button
                    startIcon={
                      isSubmitting ? <CircularProgress size="1rem" /> : null
                    }
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    {isSubmitting ? "Submitting" : isLastStep() ? "Submit" : "Next"}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      );
    }
    






// validationSchema={object({
//     PaymentMethod: array().min(1, "Pick at least 1 item")
//     .of(number().required("This field is required.")),
//     otherwise: array()

// })}