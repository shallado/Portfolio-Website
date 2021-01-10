import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ContactForm() {
  function handleSubmitMessage(values) {
    console.log(values);
  }

  const inputValidation = Yup.object({
    fullName: Yup.string().required('required'),
    email: Yup.string().email('invalid email').required('required'),
    message: Yup.string().required('required'),
  });

  const initialValues = {
    fullName: '',
    email: '',
    message: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={inputValidation}
      onSubmit={handleSubmitMessage}
    >
      <Form className="contact-form">
        <div className="contact-form__container-one">
          <div>
            <Field type="text" placeholder="Full Name" name="fullName" />
            <ErrorMessage
              component="div"
              name="fullName"
              className="contact-form__error-message"
            />
          </div>
          <div>
            <Field type="text" placeholder="Email" name="email" />
            <ErrorMessage
              component="div"
              name="email"
              className="contact-form__error-message"
            />
          </div>
        </div>
        <div className="contact-form__container-two">
          <Field as="textarea" placeholder="Message" name="message" />
          <ErrorMessage
            component="div"
            name="message"
            className="contact-form__error-message"
          />
        </div>
        <div className="contact-form__container-three">
          <p className="contact-form__resume">Resume</p>
          <button className="contact-form__btn-submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
}

export default ContactForm;
