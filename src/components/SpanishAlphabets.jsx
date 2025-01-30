const SpanishAlphabets = () => {
    const alphabets = [
        { letter: "A", sound: "/sounds/spanish/A.mp3" },
        { letter: "B", sound: "/sounds/spanish/B.mp3" },
        { letter: "C", sound: "/sounds/spanish/C.mp3" },
        { letter: "D", sound: "/sounds/spanish/D.mp3" },
        { letter: "E", sound: "/sounds/spanish/E.mp3" },
        { letter: "F", sound: "/sounds/spanish/F.mp3" },
        { letter: "G", sound: "/sounds/spanish/G.mp3" },
        { letter: "H", sound: "/sounds/spanish/H.mp3" },
        { letter: "I", sound: "/sounds/spanish/I.mp3" },
        { letter: "J", sound: "/sounds/spanish/J.mp3" },
        { letter: "K", sound: "/sounds/spanish/K.mp3" },
        { letter: "L", sound: "/sounds/spanish/L.mp3" },
        { letter: "M", sound: "/sounds/spanish/M.mp3" },
        { letter: "N", sound: "/sounds/spanish/N.mp3" },
        { letter: "Ñ", sound: "/sounds/spanish/Ñ.mp3" },
        { letter: "O", sound: "/sounds/spanish/O.mp3" },
        { letter: "P", sound: "/sounds/spanish/P.mp3" },
        { letter: "Q", sound: "/sounds/spanish/Q.mp3" },
        { letter: "R", sound: "/sounds/spanish/R.mp3" },
        { letter: "S", sound: "/sounds/spanish/S.mp3" },
        { letter: "T", sound: "/sounds/spanish/T.mp3" },
        { letter: "U", sound: "/sounds/spanish/U.mp3" },
        { letter: "V", sound: "/sounds/spanish/V.mp3" },
        { letter: "W", sound: "/sounds/spanish/W.mp3" },
        { letter: "X", sound: "/sounds/spanish/X.mp3" },
        { letter: "Y", sound: "/sounds/spanish/Y.mp3" },
        { letter: "Z", sound: "/sounds/spanish/Z.mp3" }
    ];

    const playSound = (letter) => {
        const speech = new SpeechSynthesisUtterance(letter);
        speech.lang = "es-ES";  // Spanish language
        speech.rate = 0.9;      // Slow down for better clarity
        speech.pitch = 1.1;     // Softer, natural tone

        // Select a female Spanish voice if available
        const voices = window.speechSynthesis.getVoices();
        speech.voice = voices.find(voice => voice.lang === "es-ES" && voice.name.includes("Female"));

        window.speechSynthesis.speak(speech);
    };


    return (
        <div className="spanish-background">
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

export default SpanishAlphabets;
