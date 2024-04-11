import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from "./ContactForm.module.css";

function ContactForm({ onSubmit }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    number: Yup.string().required('Number is required!').min(3, 'Number must be at least 3 characters').max(20, 'Number cannot exceed 50 characters')
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
<Form className={css.contactForm}>
<div className={css.inputContainer}>
            <label htmlFor="name">Name</label>
            <Field className={css.input} type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="number">Number</label>
            <Field className={css.input} type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>

              <div className={css.contactSubmit}><button type="submit">Add Contact</button></div>
          
        </Form>
    </Formik>
  );
}

export default ContactForm;
