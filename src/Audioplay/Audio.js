import React, { useState, useEffect } from "react";


const useAudio = url => {

    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Audio = ({ url }) => {



    const [playing, toggle] = useAudio(url);

    return (
        <div>
            <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
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