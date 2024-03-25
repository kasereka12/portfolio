import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';


function App() {
  return (
    <main className="App">
      <div>
        <Header />

      </div>
      <div id='home'>
        <Home />
      </div>
      <div id='About'>
        <About />
      </div>
      <div id='Services'>
        <Services />
      </div>
      <div id='Projects'>
        <Projects />
      </div>
      <div id='Contacts'>
        <Contacts />
      </div>
    </main>
  );
}

export default App;
