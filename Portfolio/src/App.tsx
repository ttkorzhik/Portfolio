import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Git from "./components/Git/Git";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
