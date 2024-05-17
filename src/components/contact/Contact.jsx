import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const formRef = useRef();  // use useRef to create quote for form
    const [statusMessage, setStatusMessage] = useState('');  // use to save status message
    const [isError, setIsError] = useState(false);  // mark the message if it is right or wrong

    const sendEmail = (e) => {
        e.preventDefault();
        setStatusMessage('');  // clean any message before the it was sent
        setIsError(false);

        const nameInput = formRef.current.querySelector('[name="name"]');
        const emailInput = formRef.current.querySelector('[name="email"]');
        const messageInput = formRef.current.querySelector('[name="message"]');

        if (!nameInput || !emailInput || !messageInput) {
            setStatusMessage('One or more form elements are missing.');
            setIsError(true);
            return;
        }

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            setStatusMessage('Please fill in all fields.');
            setIsError(true);
            return;
        }

        emailjs.sendForm(
            'service_540pob4',
            'template_6fzy4bb',
            formRef.current,
            { publicKey: 'HqGqBeqmGgyYYdbJX' }
        ).then(response => {
            setStatusMessage('Thank you for your email, I will get back to you soon!');
            setIsError(false);
            e.target.reset();  // reset the form after the message send successfully
        }).catch(error => {
            setStatusMessage('Failed to send email. Please try again later.');
            setIsError(true);
            console.error('Failed to send email:', error);
        });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">imavisma@gmail.com</span>
                            <a href="mailto:mavisgift@gmail.com" className="contact__button">Send me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bx-message-square-dots contact__card-icon"></i>
                            <h3 className="contact__card-title">Contact</h3>
                            <span className="contact__card-data">0424209565</span>
                            <a href="https://m.me/crypticalcoder" className="contact__button">Contact<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__subtitle">Fill in the form below or email us directly at imavisma@gmail.com. You're in good hands.</h3>
                    <form ref={formRef} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Full name *</label>
                            <input type="text" name="name" className="contact__form-input" required placeholder="" />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email *</label>
                            <input type="email" name="email" className="contact__form-input" required placeholder="" />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea name="message" cols="30" rows="10" className="contact__form-input" required placeholder="Let's talk about creative ideas for your project!"></textarea>
                        </div>
                        <button type="submit" className="button button--flex button-special">
                            Send Message
                            {/* SVG content here if needed */}
                        </button>
                    </form>
                    {statusMessage && <div className={isError ? "error-message" : "success-message"}>{statusMessage}</div>}
                </div>
            </div>
        </section>
    );
};

export default Contact;
