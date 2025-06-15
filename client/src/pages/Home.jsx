import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-5">
        <h1>Welcome to Savorly 🍽️</h1>
        <p>Your personal recipe book — add, view, and share your favorite dishes!</p>
      </div>
    </>
  );
}

export default Home;

