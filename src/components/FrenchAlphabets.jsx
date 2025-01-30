const FrenchAlphabets = () => {
    const alphabets = [
        { letter: "A", sound: "/sounds/french/A.mp3" },
        { letter: "B", sound: "/sounds/french/B.mp3" },
        { letter: "C", sound: "/sounds/french/C.mp3" },
        { letter: "D", sound: "/sounds/french/D.mp3" },
        { letter: "E", sound: "/sounds/french/E.mp3" },
        { letter: "F", sound: "/sounds/french/F.mp3" },
        { letter: "G", sound: "/sounds/french/G.mp3" },
        { letter: "H", sound: "/sounds/french/H.mp3" },
        { letter: "I", sound: "/sounds/french/I.mp3" },
        { letter: "J", sound: "/sounds/french/J.mp3" },
        { letter: "K", sound: "/sounds/french/K.mp3" },
        { letter: "L", sound: "/sounds/french/L.mp3" },
        { letter: "M", sound: "/sounds/french/M.mp3" },
        { letter: "N", sound: "/sounds/french/N.mp3" },
        { letter: "O", sound: "/sounds/french/O.mp3" },
        { letter: "P", sound: "/sounds/french/P.mp3" },
        { letter: "Q", sound: "/sounds/french/Q.mp3" },
        { letter: "R", sound: "/sounds/french/R.mp3" },
        { letter: "S", sound: "/sounds/french/S.mp3" },
        { letter: "T", sound: "/sounds/french/T.mp3" },
        { letter: "U", sound: "/sounds/french/U.mp3" },
        { letter: "V", sound: "/sounds/french/V.mp3" },
        { letter: "W", sound: "/sounds/french/W.mp3" },
        { letter: "X", sound: "/sounds/french/X.mp3" },
        { letter: "Y", sound: "/sounds/french/Y.mp3" },
        { letter: "Z", sound: "/sounds/french/Z.mp3" }
    ];

    const playSound = (letter) => {
        const speech = new SpeechSynthesisUtterance(letter);
        speech.lang = "fr-FR";  // French language
        speech.rate = 0.9;      // Slow down for clear pronunciation
        speech.pitch = 1.1;     // Slightly softer tone

        // Select a female French voice if available
        const voices = window.speechSynthesis.getVoices();
        speech.voice = voices.find(voice => voice.lang === "fr-FR" && voice.name.includes("Female"));

        window.speechSynthesis.speak(speech);
    };


    return (
        <div className="french-background">
            <h1 className="quote">Alphabets</h1>
            <div className="alphabet-container">
                {alphabets.map((alphabet, index) => (
                    <button key={index} className="alphabet-box" onClick={() => playSound(alphabet.sound)}>
                        <h3>{alphabet.letter}</h3>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FrenchAlphabets;
