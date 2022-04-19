import React, {useState } from 'react';
import Searchbar from './Searchbar';
import { Card, CardContent, Typography, Divider, Button } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-mui'
import { mixed, number, object, array } from 'yup';


const Products = () => {
    
return (
    
    <div className='App'>
    <h1>products</h1>
        <Searchbar />
        <Divider />
        <Card>
            <CardContent>
            <FormikStepper
            validationSchema={object({
                PaymentMethod: array().min(1, "Pick at least 1 item")
                .of(number().required("This field is required.")),
                otherwise: array()
        
            })}
            initialValues={{
                ProductName: '',
                Price: '',
                ProductDescription: '',
                PaymentCash: '',
                PaymentPaypal: '',
                PaymentBank: '',
                PaymentFree: '',
                ProductPhoto : []
            }} onSubmit={() =>{}}>
           
            
            <FormikStep>
            <Field name="ProductName" component={TextField} label="Product Name" />
            <Field name="Price" component={TextField} label="Price" />
            </FormikStep>
                <FormikStep>
                <Field name="ProductDescription" component={TextField} label="Product Description" />
                </FormikStep>

                    <FormikStep>
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
export default Products;




export function FormikStep({ children }) {
return <>{children}</>
}


export function FormikStepper({children, ...props}) {
   const childrenArray = React.Children.toArray(children);
   const [step, setStep] = useState(0);

   const currentChild = childrenArray[step];

function isLastStep() {
    return step === childrenArray.length - 1;
}

   return (
    <Formik {...props} onSubmit={async (values, helpers) => {
        if(isLastStep()) {
            await props.onSubmit(values, helpers);
        }else {
            setStep(s => s + 1);
        }
    }}

        {...props}
     >
    
     <Form autoComplete='off'>{currentChild}
     {step > 0 ? <Button onCLick={() => setStep(s=> s-1)}>Back</Button> : null}
     <Button type="submit">{isLastStep() ? 'Submit' : 'Next'}</Button>
     
     </Form>
     </Formik>
     )
}


