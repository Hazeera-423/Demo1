import React, { useState } from 'react';


import './home.css';

function Home() {
     const [text, setText] = useState("");
        const [text1, setText1] = useState("");
  return (
    <div className="page">
   
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

   
      <main>
        <h2>Welcome to the Media Gallery</h2>
        <p>This is your one-stop platform for amazing images.</p>
      </main>

   
      <div className="gallery" id="gallery">
        <img src="a11.jpeg" alt="Gallery item 1" />
        <img src="a2.jpeg" alt="Gallery item 4" />
        <img src="a4.jpeg" alt="Gallery item 4" />
        <img src="a5.jpeg" alt="Gallery item 5" />
        <img src="a7.jpeg" alt="Gallery item 1" />
        <img src="a10.jpeg" alt="Gallery item 4" />
        <img src="a8.jpeg" alt="Gallery item 4" />
        <img src="a9.jpeg" alt="Gallery item 5" />
        <img src="a21.jpeg" alt="Gallery item 1" />
        <img src="a22.jpeg" alt="Gallery item 4" />
        <img src="a23.jpeg" alt="Gallery item 4" />
        <img src="a24.jpeg" alt="Gallery item 5" />
        
      </div>

   
      <div className="contact" id="contact">
        <h3>Contact Us</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required value={text} onChange={(e)=> setText(e.target.value)}/>

          <label htmlFor="number">Number:</label>
          <input type="number" id="number" placeholder="Enter your number" required value={text1} onChange={(e)=> setText1(e.target.value)}/>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <button type="submit">Submit</button>
        </form>
        <p>Your Name:{text}</p>
        <hp>Your Number:{text1}</hp>
      </div>

    
      <footer className="footer">
        <p>© 2025 Gallery of Photos. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
