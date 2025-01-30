const ItalianAlphabets = () => {
    const alphabets = [
        { letter: "A", sound: "/sounds/italian/A.mp3" },
        { letter: "B", sound: "/sounds/italian/B.mp3" },
        { letter: "C", sound: "/sounds/italian/C.mp3" },
        { letter: "D", sound: "/sounds/italian/D.mp3" },
        { letter: "E", sound: "/sounds/italian/E.mp3" },
        { letter: "F", sound: "/sounds/italian/F.mp3" },
        { letter: "G", sound: "/sounds/italian/G.mp3" },
        { letter: "H", sound: "/sounds/italian/H.mp3" },
        { letter: "I", sound: "/sounds/italian/I.mp3" },
        { letter: "L", sound: "/sounds/italian/L.mp3" },
        { letter: "M", sound: "/sounds/italian/M.mp3" },
        { letter: "N", sound: "/sounds/italian/N.mp3" },
        { letter: "O", sound: "/sounds/italian/O.mp3" },
        { letter: "P", sound: "/sounds/italian/P.mp3" },
        { letter: "Q", sound: "/sounds/italian/Q.mp3" },
        { letter: "R", sound: "/sounds/italian/R.mp3" },
        { letter: "S", sound: "/sounds/italian/S.mp3" },
        { letter: "T", sound: "/sounds/italian/T.mp3" },
        { letter: "U", sound: "/sounds/italian/U.mp3" },
        { letter: "V", sound: "/sounds/italian/V.mp3" },
        { letter: "Z", sound: "/sounds/italian/Z.mp3" }
    ];

    const playSound = (letter) => {
        const speech = new SpeechSynthesisUtterance(letter);
        speech.lang = "it-IT";  // Italian language
        speech.rate = 0.9;      // Slow down for better clarity
        speech.pitch = 1.1;     // Softer, natural tone

        // Select a female Italian voice if available
        const voices = window.speechSynthesis.getVoices();
        speech.voice = voices.find(voice => voice.lang === "it-IT" && voice.name.includes("Female"));

        window.speechSynthesis.speak(speech);
    };


    return (
        <div className="italian-background">
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

export default ItalianAlphabets;
