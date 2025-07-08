import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import UniversoMDAL from './components/UniversoMDAL';
import Episodes from './components/Episodes';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <UniversoMDAL />
                <Episodes />
                <About />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
        <AudioPlayer />
      </div>
    </Router>
  );
}

export default App;