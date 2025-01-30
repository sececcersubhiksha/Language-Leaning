const EnglishAlphabets = (navigateTo) => {
    const alphabets = [
        { letter: "A" }, { letter: "B" }, { letter: "C" }, { letter: "D" },
        { letter: "E" }, { letter: "F" }, { letter: "G" }, { letter: "H" },
        { letter: "I" }, { letter: "J" }, { letter: "K" }, { letter: "L" },
        { letter: "M" }, { letter: "N" }, { letter: "O" }, { letter: "P" },
        { letter: "Q" }, { letter: "R" }, { letter: "S" }, { letter: "T" },
        { letter: "U" }, { letter: "V" }, { letter: "W" }, { letter: "X" },
        { letter: "Y" }, { letter: "Z" }
    ];

    const playSound = (letter) => {
        const speech = new SpeechSynthesisUtterance(letter);
        speech.lang = "en-US";
        speech.rate = 0.9;  // Slower speech for clarity
        speech.pitch = 1.2; // Higher pitch for a softer female voice
    
        const voices = window.speechSynthesis.getVoices();
        speech.voice = voices.find(voice => voice.name.includes("Female") || voice.name.includes("Google US English"));
    
        window.speechSynthesis.speak(speech);
    };
       

    return (
        <>
            <div className="english-background">
                <h1 className="quote">Alphabets</h1>
                <div className="alphabet-container">
                    {alphabets.map((alphabet, index) => (
                        <button key={index} className="alphabet-box" onClick={() => playSound(alphabet.letter)}>
                            <h3>{alphabet.letter}</h3>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EnglishAlphabets;
