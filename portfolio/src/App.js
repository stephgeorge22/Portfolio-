import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {

  const [categories] = useState([
    { name: "About Me", description: "About me section", },
    { name: "Portfolio", description: "A portfolio consisting of a few applications I've created" },
    { name: "Contact Me", description: "Contact me section" },
    { name: "Resume", description: "A detailed resume of my work", },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header>
      </Header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
