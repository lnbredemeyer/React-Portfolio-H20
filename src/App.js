import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div >
  );
}

export default App;