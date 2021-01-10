import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleNameChange(e) {
    const name = e.target.value;

    setName(name);
  }

  function handleEmailChange(e) {
    const email = e.target.value;

    setEmail(email);
  }

  function handleMessageChange(e) {
    const message = e.target.value;

    setMessage(message);
  }

  function handleSubmitMessage(e) {
    e.preventDefault();

    console.log(name, email, message);
  }

  return (
    <form onSubmit={handleSubmitMessage} className="contact-form">
      <div className="contact-form__container-one">
        <input
          type="text"
          value={name}
          placeholder="Name"
          id="name"
          onChange={handleNameChange}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          id="email"
          onChange={handleEmailChange}
        />
      </div>
      <div className="contact-form__container-two">
        <textarea
          value={message}
          placeholder="Message"
          id="message"
          onChange={handleMessageChange}
        ></textarea>
      </div>
      <div className="contact-form__container-three">
        <p className="contact-form__resume">Resume</p>
        <button className="contact-form__btn-submit">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
