import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Domains from './components/Domains';
import Board from './components/Board';
import Events from './components/Events';
import Footer from './components/Footer';
import EventsPage from './components/EventsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <div id="about">
                <AboutUs />
              </div>
              <div id="domains">
                <Domains />
              </div>
              <div id="board">
                <Board />
              </div>
              <Events />
              <div id="footer">
                <Footer />
              </div>
            </>
          }
        />
        {/* Events page route */}
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
