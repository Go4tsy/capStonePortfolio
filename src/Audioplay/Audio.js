import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing, audio]);

    useEffect(() => {
        const handleEnded = () => setPlaying(false);
        audio.addEventListener('ended', handleEnded);
        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audio]);

    return [playing, toggle];
};

const Audio = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem 0' }}>
            <motion.button
                onClick={toggle}
                initial={false}
                animate={{
                    scale: playing ? 1.15 : 1,
                    backgroundColor: playing ? '#4069fd' : '#fff',
                    color: playing ? '#fff' : '#4069fd',
                    boxShadow: playing ? '0 0 12px #4069fd55' : '0 2px 8px rgba(0,0,0,0.07)'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                    border: 'none',
                    borderRadius: '50%',
                    width: 60,
                    height: 60,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    outline: 'none',
                }}
                aria-label={playing ? 'Pause audio' : 'Play audio'}
            >
                {playing ? "Pause" : "Play"}
            </motion.button>
        </div>
    );
}

export default Audio;

// You can also accomplish this by using the useSound hook.

// To do this, first install the npm package:

// npm install use-sound
// Imports:

// import useSound from 'use-sound'
// import mySound from '../assets/sounds/yourSound.mp3' // Your sound file path here
// Usage example 1
// A simple approach..

// function MyButton(){
//   const [playSound] = useSound(mySound)
  
//   return (
//     <button onClick={() => playSound()}>
//        Play Sound
//     </button>
//   )
// }