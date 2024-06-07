import React, { useEffect, useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);


    useEffect(() => {
        const datas = document.querySelectorAll('.qualification__data');
        datas.forEach((data, index) => {
            setTimeout(() => {
                data.style.opacity = 1;
                data.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }, [toggleState]);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master of Information Technology</h3>
                                <span className="qualification__subtitle"> RMIT University</span>
                                <h3 className="qualification__title">Melbourne, AU</h3>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2019
                                </div>
                                <p className="qualification__description">Coursework - Database Concepts • IT Infrastructure and Security •
                                    Programming Fundamentals • Usability Engineering • Advanced Programming • Data Mining • Software Engineering
                                    Fundamentals • Cloud Computing • Algorithms and Analysis • Digital Innovation • Programming Internet of Things •
                                    Software Engineering Project Management • Cloud Security • Secure Electronic Commerce • Postgraduate IT Project</p>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Bachelor of Computer Science and Technology</h3>
                                <span className="qualification__subtitle"> Hubei University</span>
                                <h3 className="qualification__title">China</h3>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2007 - 2009
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Astra Education Group Pty Ltd</span>
                                <h3 className="qualification__title">Melbourne, AU</h3>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Sales Engineer - Restaurant & Retail POS System</h3>
                                <span className="qualification__subtitle">Hubei Haide Software Technology Co., Ltd.</span>
                                <h3 className="qualification__title">China</h3>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2014 - 2018
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Sales Assistant</h3>
                                <span className="qualification__subtitle">Wuhan Admiral Technology Co., Ltd. (AOC Brand)</span>
                                <h3 className="qualification__title">China</h3>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2009 - 2013
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification