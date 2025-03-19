import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export const ValidationSchemaExample = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  let [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            {(errors.firstName && touched.firstName) ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
