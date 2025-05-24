import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter';
import '../styles/Pokedex.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [trainerName, setTrainerName] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [pokedexOpen, setPokedexOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('landing-page-body');
    // Set Pokédex to open state immediately for animation
    // The CSS will handle the transition from 'closed' to 'open'
    const timer = setTimeout(() => setPokedexOpen(true), 50); // Short delay to ensure CSS class is applied
    return () => {
      document.body.classList.remove('landing-page-body');
      clearTimeout(timer);
    };
  }, []);

  const handleTypingComplete = () => {
    setTypingComplete(true);
    setTimeout(() => {
      setShowInput(true);
    }, 300); // Shorter delay for input to appear
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trainerName.trim()) {
      localStorage.setItem('trainerName', trainerName.trim());
      navigate('/starter');
    } else {
      alert('Please enter your name, Trainer!');
    }
  };

  const pokedexVariants = {
    closed: { scale: 0.8, opacity: 0.8 }, // Initial state before opening, no tilt
    open: { scale: 1, opacity: 1, transition: { duration: 5, ease: [0.6, 0.05, -0.01, 0.9] } } // Smooth opening
  };

  const inputContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="pokedex-container-outer">
      <motion.div
        className={`pokedex ${pokedexOpen ? 'open' : 'closed'}`}
        variants={pokedexVariants}
        initial="closed"
        animate={pokedexOpen ? "open" : "closed"}
      >
        {/* Left Panel */}
        <div className="pokedex-panel left">
          <div className="pokedex-hinge-deco hinge-top"></div>
          <div className="pokedex-hinge-deco hinge-bottom"></div>
          <div className="pokedex-main-screen">
            {!typingComplete ? (
              <Typewriter
                text="Welcome, Trainer! Your Pokédex is ready. Please identify yourself."
                speed={50}
                onComplete={handleTypingComplete}
              />
            ) : (
              <motion.div
                variants={inputContainerVariants}
                initial="hidden"
                animate={showInput ? "visible" : "hidden"}
                className="pokedex-input-container"
              >
                {showInput && (
                  <>
                    <motion.div className="unknown-image-placeholder" variants={itemVariants}>
                      ?
                    </motion.div>
                    <motion.form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} variants={itemVariants}>
                      <motion.input
                        type="text"
                        value={trainerName}
                        onChange={(e) => setTrainerName(e.target.value)}
                        placeholder="TRAINER NAME"
                        className="pokedex-input"
                        variants={itemVariants} // Individual items can also have variants if needed for more granular control
                      />
                      <motion.button
                        type="submit"
                        className="pokedex-submit-button"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        BEGIN JOURNEY
                      </motion.button>
                    </motion.form>
                  </>
                )}
              </motion.div>
            )}
          </div>
          <div className="pokedex-sub-screen">
            {typingComplete && showInput ? "Enter your name to start your adventure!" : "Awaiting Trainer Identification..."}
          </div>
          <div className="left-panel-buttons">
            <button className="small-round-button" aria-label="Info">?</button>
            <button className="shiny-button">SHINY</button>
            <button className="small-round-button" aria-label="Cycle">↻</button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="pokedex-panel right">
          <div className="pokedex-hinge-deco hinge-top"></div>
          <div className="pokedex-hinge-deco hinge-bottom"></div>
          <div className="stats-area">
            <p>This advanced Pokédex, model Kanto-DX, provides comprehensive data on Pokémon species.</p>
            <p>It includes habitat information, behavioral patterns, and battle statistics. Use the controls to navigate entries.</p>
          </div>
          {/* These could be dynamic later, for now static as per image */}
          {/* <div className="types-area">
            <div className="type-button type-poison">POISON</div>
            <div className="type-button type-grass">GRASS</div>
          </div>
          <div className="evolution-display">
            <div className="evo-slot">I</div>
            <div className="evo-slot">II</div>
            <div className="evo-slot">III</div>
          </div> */}
          <div className="moves-area">
            <p>Access detailed move sets, including type, power, accuracy, and PP. </p>
            <p>The Pokédex also records learned levels and potential TMs/HMs compatibility.</p>
          </div>
          <div className="right-panel-controls">
            <button className="action-button-blue" aria-label="Blue Action Button"></button>
            <div className="d-pad-container">
              <div className="d-pad-row">
                <div></div>
                <button className="d-pad-button d-pad-up" aria-label="D-pad Up">▲</button>
                <div></div>
              </div>
              <div className="d-pad-row">
                <button className="d-pad-button d-pad-left" aria-label="D-pad Left">◀</button>
                <div className="d-pad-center"></div>
                <button className="d-pad-button d-pad-right" aria-label="D-pad Right">▶</button>
              </div>
              <div className="d-pad-row">
                <div></div>
                <button className="d-pad-button d-pad-down" aria-label="D-pad Down">▼</button>
                <div></div>
              </div>
            </div>
            <button className="small-green-rect-button" aria-label="Small Green Button"></button>
            <div></div> {/* Grid spacer */}
            <button className="action-button-red" aria-label="Red Action Button"></button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;