import React, { useEffect, useRef } from 'react';
import "./App.css";
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Services from './components/services/Services.jsx';
import Qualification from './components/qualification/Qualification.jsx';
import Work from './components/work/Work.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import ScrollUp from './components/scrollup/ScrollUp.jsx';

const Section = ({ id, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div id={id} ref={sectionRef} className="section">
      {children}
    </div>
  );
};

const App = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }

      const elements = document.querySelectorAll('.magnify');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const cursorX = event.clientX;
        const cursorY = event.clientY;

        if (
          cursorX > rect.left && cursorX < rect.right &&
          cursorY > rect.top && cursorY < rect.bottom
        ) {
          element.classList.add('magnified');
        } else {
          element.classList.remove('magnified');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <>
      <Header />

      <main className='main'>
      <div ref={cursorRef} className="custom-cursor"></div> {/* Custom cursor element */}
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="services">
          <Services />
        </Section>
        <Section id="qualification">
          <Qualification />
        </Section>
        <Section id="work">
          <Work />
        </Section>
        <Section id="testimonials">
          <Testimonials />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;