import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

function ContactPage() {
  return (
    <div className="contact">
      <div className="contact__container">
        <h2 className="heading-two">Contact</h2>
        <SocialLinks />
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
