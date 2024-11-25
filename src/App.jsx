import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Header, Hero, HighLights, Model, Features, HowItWorks, Footer } from './Sections';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <HighLights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;