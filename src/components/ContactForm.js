import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import emailjsConfig from '../config/emailjs';
import EmailStatus from '../modals/EmailStatus';
import IconResume from '../svg/IconResume';

function ContactForm() {
  const [emailStatus, setEmailStatus] = useState('');

  function handleSubmitMessage(values, actions) {
    const { serviceId, templateId, userId } = emailjsConfig;

    emailjs
      .send(serviceId, templateId, values, userId)
      .then((response) => {
        if (response.status === 200) {
          setEmailStatus('successfully sent message');
          actions.resetForm();
        } else {
          setEmailStatus(response.text);
        }
      })
      .catch((err) => {
        if (err.status === 0) {
          setEmailStatus('unable to send message');
        } else {
          setEmailStatus(err.text);
        }
      });
  }

  function resetEmailStatus() {
    setEmailStatus('');
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
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={inputValidation}
        onSubmit={handleSubmitMessage}
        resetForm
      >
        <Form className="contact-form">
          <div className="contact-form__container-one">
            <div className="contact-form__field-container">
              <Field type="text" placeholder="Full Name" name="fullName" />
              <ErrorMessage
                component="div"
                name="fullName"
                className="contact-form__error-message"
              />
            </div>
            <div className="contact-form__field-container">
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
              className="contact-form__error-message contact-form__error-message--text-area"
            />
          </div>
          <div className="contact-form__container-three">
            <div>
              <IconResume />
              <p className="contact-form__resume">Resume</p>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
      <EmailStatus
        emailStatus={emailStatus}
        resetEmailStatus={resetEmailStatus}
      />
    </>
  );
}

export default ContactForm;
