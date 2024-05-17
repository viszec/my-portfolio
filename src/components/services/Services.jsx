import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-circle-layer services__icon"></i>
                        <h3 className="services__title">
                            Web <br /> Developer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Web Developer</h3>
                            <p className="services__modal-description">With over four years of experience in web development, I am dedicated to delivering high-quality work to both clients and companies. My expertise spans a wide range of services aimed at enhancing user experience and strengthening brand identity.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">User Interface Development: I specialise in creating intuitive and visually appealing user interfaces that ensure a seamless and engaging user experience. My designs are not only aesthetically pleasing but also functional and user-friendly.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web Page Development: I am proficient in building robust, responsive, and efficient web pages. I employ the latest technologies and best practices to develop websites that perform well across all devices and platforms, ensuring a consistent user experience.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">UX Element Interactions: I design and implement interactive UX elements that enhance the overall usability of a website. By focusing on user-centric design, I create interactions that are intuitive and enhance the user's journey on the site.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Brand Positioning: I help position your company’s brand effectively in the digital space. By integrating branding elements seamlessly into the web design, I ensure that your brand message is clear and impactful, helping you stand out in a competitive market.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and Mockups: I create detailed design mockups for products and services. These mockups provide a clear vision of the final product, allowing for iterative feedback and refinements before the development phase, ensuring that the end product meets all client expectations.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-icons services__icon"></i>
                        <h3 className="services__title">Graphic <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Graphic Designer</h3>
                            <p className="services__modal-description">Service with more than 4 years of experience.Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I provide branding design services, including logos, identifiers, typography, and color schemes.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create UI/UX designs: as a graphic designer, I may be involved in user interface (UI) and user experience (UX) design for digital products.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I offer graphic design services for print and digital advertisements, including web ads, social media ads, and printed flyers.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I provide illustration design for use in books, magazines, websites, and other mediums.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-border-alt services__icon"></i>
                        <h3 className="services__title">Digital <br /> Marketing</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Digital Marketing</h3>
                            <p className="services__modal-description">Service with more than 4 years of experience.Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop and execute digital marketing strategies for brands, including identifying target audiences, selecting appropriate digital channels, and creating marketing content.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I have experience in SEM & SEO, providing website content optimization, keyword analysis to improve search engine rankings, and increase organic traffic. Additionally, I manage pay-per-click keyword advertising on search engines to increase website traffic and exposure.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I specialize in social media marketing, utilizing various platforms such as Facebook, Instagram, etc., to promote brands and engage with users, thereby increasing brand exposure and user participation.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Furthermore, I manage and optimize online advertising campaigns, including Google Ads, social media ads, display ads, etc., to enhance advertising effectiveness and return on investment.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services