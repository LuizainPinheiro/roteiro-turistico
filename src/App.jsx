import React from 'react';
import Header from './Components/Header';
import Router from './Router';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}