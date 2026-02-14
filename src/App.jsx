import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function App() {
  const [showLetter, setShowLetter] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.7;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Raabta playing in background!");
          })
          .catch(err => {
            console.log("Auto-play error:", err);
            // Fallback: play on first user interaction
            const handleUserInteraction = () => {
              audioRef.current.play();
              document.removeEventListener('click', handleUserInteraction);
            };
            document.addEventListener('click', handleUserInteraction);
          });
      }
    }
  }, []);

  const handleYes = () => {
    setAccepted(true);
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="container">
      <div className="overlay"></div>

      <audio 
        ref={audioRef} 
        className="background-music"
        crossOrigin="anonymous"
        loop
      >
        <source src="/raabta.mp3" type="audio/mpeg" />
      </audio>

      <h1 className="main-title">Happy Valentine's Day, Neha 💖</h1>

      <div className="button-group">
        <button className="letter-btn" onClick={() => setShowLetter(true)}>
          Open My Heart 💌
        </button>
        <button className="photos-btn" onClick={() => setShowPhotos(true)}>
          Our Memories 📸
        </button>
      </div>

      {showPhotos && (
        <div className="modal">
          <span className="close" onClick={() => setShowPhotos(false)}>&times;</span>
          <div className="gallery">
            <div className="gallery-header">💕 Our Beautiful Memories 💕</div>
            <div className="photos-container">
              <div className="photo-item">
                <img src="/images/photo1.jpg" alt="Us Together" />
                <p>Forever Together 💑</p>
              </div>
              <div className="photo-item">
                <img src="/images/photo2.jpg" alt="Our Moment" />
                <p>Your Smile ✨</p>
              </div>
              <div className="photo-item">
                <img src="/images/photo3.jpg" alt="Love" />
                <p>Love & Laughter 💕</p>
              </div>
              <div className="photo-item">
                <img src="/images/photo4.jpg" alt="Forever" />
                <p>Till Eternity 🌹</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLetter && (
        <div className="letter">
          <h2>My Dearest Neha 🌸</h2>
          <p>
            From the moment you came into my life,
            everything became brighter, softer, and more beautiful.
            You are my peace, my happiness, my forever.
          </p>
          <p>
            Will you stay by my side forever?
          </p>

          {!accepted ? (
            <button className="yes-btn" onClick={handleYes}>
              Yes, Forever 💍
            </button>
          ) : (
            <h3 className="love-msg">I Love You Endlessly ❤️</h3>
          )}
        </div>
      )}

      <div className="roses"></div>
      <div className="hearts"></div>
      <div className="sparkles"></div>
    </div>
  );
}
