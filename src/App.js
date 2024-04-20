import React from 'react';
import logo from './logo.svg';
import "./App.css";
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
<<<<<<< HEAD
import Services from './components/services/Services.jsx';
import Qualification from './components/qualification/Qualification.jsx';
/*import Testimonials from './components/testimonials/Testimonials.jsx'*/
=======
>>>>>>> 9139be7002d2716759c5832c6fc0d2f18ff9eb6f

export const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
<<<<<<< HEAD
        <Services />
        <Qualification />

=======
>>>>>>> 9139be7002d2716759c5832c6fc0d2f18ff9eb6f
      </main>
    </>
  )
}

export default App;