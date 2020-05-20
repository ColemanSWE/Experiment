import React from 'react';
import emailjs from 'emailjs-com';

export function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'contact_form', e.target, 'user_LERoOGZgTar7rIjqBYkPs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Email</label>
      <input type="email" name="senderEmail" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}




