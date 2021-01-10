import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import emailjsConfig from '../config/emailjs';

function ContactForm() {
  function handleSubmitMessage(values, actions) {
    const { serviceId, templateId, userId } = emailjsConfig;

    emailjs
      .send(serviceId, templateId, values, userId)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.text);
      });

    actions.resetForm();
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
      resetForm
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
          <button type="submit" className="contact-form__btn-submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default ContactForm;
