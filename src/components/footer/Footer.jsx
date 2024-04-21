import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Mavis</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#project" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/viis.ma/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram-alt"></i>
                    </a>

                    <a href="https://facebook.com/mavisma.one/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-facebook-circle"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/mavisxjma/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin-square"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; MAVIS. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer