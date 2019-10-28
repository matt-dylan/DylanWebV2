import React from 'react';
import { About, Contact, Footer, Header, Home, Skills } from './containers';

function AppContainer() {
  return (
    <main id="app">
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default AppContainer;
