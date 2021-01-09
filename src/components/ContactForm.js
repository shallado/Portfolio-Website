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
    <form onSubmit={handleSubmitMessage}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} id="name" onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={email}
          id="email"
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          value={message}
          id="message"
          onChange={handleMessageChange}
        ></textarea>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ContactForm;
