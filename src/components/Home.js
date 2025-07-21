// src/App.js (or HomePage.js)
import React from 'react';
import './App.css'; // Create this CSS file

function Home() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">HomeLoans</div>
      <hi> Welcome to TWHomeLoans</hi>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Home Loan</h1>
        <p>We offer a variety of home loan options to suit your needs.Our app is independent of middlemen.You can directly calculate EMI's,see the status  </p>
        {/* <button className="cta-button">Get Started</button> */}
      </div>
    </section>
  );
}

function CallToAction() {
    return (
        <section className="cta">
            <h2>Ready to take the next step?</h2>
            <p>Contact us today to learn more about our home loan products.</p>
            
        </section>
    )
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 TWHomeLoans. All rights reserved.</p>
    </footer>
  );
}

export default Home;