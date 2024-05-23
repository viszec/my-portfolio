import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">MAViS</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/viis.ma/" className="footer__social-link" target="_blank" rel="noreferrer noopener">
                        <i class="bx bxl-instagram-alt"></i>
                    </a>

                    <a href="https://facebook.com/mavisma.one/" className="footer__social-link" target="_blank" rel="noreferrer noopener">
                        <i class="bx bxl-facebook-circle"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/mavisxjma/" className="footer__social-link" target="_blank" rel="noreferrer noopener">
                        <i class="bx bxl-linkedin-square"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; MAViS 2024. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer