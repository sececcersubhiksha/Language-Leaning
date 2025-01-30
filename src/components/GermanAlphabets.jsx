const GermanAlphabets = () => {
    const alphabets = [
        { letter: "A", sound: "/sounds/german/A.mp3" },
        { letter: "B", sound: "/sounds/german/B.mp3" },
        { letter: "C", sound: "/sounds/german/C.mp3" },
        { letter: "D", sound: "/sounds/german/D.mp3" },
        { letter: "E", sound: "/sounds/german/E.mp3" },
        { letter: "F", sound: "/sounds/german/F.mp3" },
        { letter: "G", sound: "/sounds/german/G.mp3" },
        { letter: "H", sound: "/sounds/german/H.mp3" },
        { letter: "I", sound: "/sounds/german/I.mp3" },
        { letter: "J", sound: "/sounds/german/J.mp3" },
        { letter: "K", sound: "/sounds/german/K.mp3" },
        { letter: "L", sound: "/sounds/german/L.mp3" },
        { letter: "M", sound: "/sounds/german/M.mp3" },
        { letter: "N", sound: "/sounds/german/N.mp3" },
        { letter: "O", sound: "/sounds/german/O.mp3" },
        { letter: "P", sound: "/sounds/german/P.mp3" },
        { letter: "Q", sound: "/sounds/german/Q.mp3" },
        { letter: "R", sound: "/sounds/german/R.mp3" },
        { letter: "S", sound: "/sounds/german/S.mp3" },
        { letter: "T", sound: "/sounds/german/T.mp3" },
        { letter: "U", sound: "/sounds/german/U.mp3" },
        { letter: "V", sound: "/sounds/german/V.mp3" },
        { letter: "W", sound: "/sounds/german/W.mp3" },
        { letter: "X", sound: "/sounds/german/X.mp3" },
        { letter: "Y", sound: "/sounds/german/Y.mp3" },
        { letter: "Z", sound: "/sounds/german/Z.mp3" },
        { letter: "Ä", sound: "/sounds/german/Ae.mp3" },
        { letter: "Ö", sound: "/sounds/german/Oe.mp3" },
        { letter: "Ü", sound: "/sounds/german/Ue.mp3" },
        { letter: "ß", sound: "/sounds/german/Eszett.mp3" }
    ];

    const playSound = (letter) => {
        const speech = new SpeechSynthesisUtterance(letter);
        speech.lang = "de-DE";  // German language
        speech.rate = 0.9;      // Slow down for clear pronunciation
        speech.pitch = 1.1;     // Slightly softer tone
    
        // Select a female German voice if available
        const voices = window.speechSynthesis.getVoices();
        speech.voice = voices.find(voice => voice.lang === "de-DE" && voice.name.includes("Female"));
    
        window.speechSynthesis.speak(speech);
    };
    

    return (
        <div className="german-background">
            <h1 className="quote">Alphabets</h1>
            <div className="alphabet-container">
                {alphabets.map((alphabet, index) => (
                    <button key={index} className="alphabet-box" onClick={() => playSound(alphabet.letter)}>
                        <h3>{alphabet.letter}</h3>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GermanAlphabets;
