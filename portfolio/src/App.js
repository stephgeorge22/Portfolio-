import React, { useState } from "react";
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {

  const [categories] = useState([

    { name: "Portfolio", description: "A portfolio consisting of a few applications I've created" },
    { name: "Resume", description: "A detailed resume of my work", },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
