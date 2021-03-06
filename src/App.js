import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [categories] = useState([
    { name: "About Me", description: "About me section" },
    { name: "Contact", description: "Contact me section" },
    { name: "Portfolio", description: "A portfolio consisting of a few applications I've created" },
    { name: "Resume", description: "A detailed resume of my work" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  const displayComponents = () => {
    if (currentCategory.name ===   "Portfolio") {
      return <Portfolio></Portfolio>;
    } else if (currentCategory.name === "Contact") {
      return <Contact></Contact>
    } else if (currentCategory.name === "Resume") {
      return <Resume></Resume>
    }
    else {
      return <About></About>;
    }
  }
  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        contactSelected={contactSelected}
        currentCategory={currentCategory}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        { displayComponents() }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
