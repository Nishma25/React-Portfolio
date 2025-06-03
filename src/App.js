import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import SocialLinks from './components/SocialLinks';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative z-0 bg-primary dark:bg-primary-dark">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <SocialLinks />
          <Home />
        </div>
        <About />
        <Work />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
