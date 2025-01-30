const JapaneseAlphabets = () => {
    const hiragana = [
        { letter: "あ", sound: "/sounds/japanese/ah.mp3" },
        { letter: "い", sound: "/sounds/japanese/ee.mp3" },
        { letter: "う", sound: "/sounds/japanese/oo.mp3" },
        { letter: "え", sound: "/sounds/japanese/eh.mp3" },
        { letter: "お", sound: "/sounds/japanese/oh.mp3" },
        { letter: "か", sound: "/sounds/japanese/ka.mp3" },
        { letter: "き", sound: "/sounds/japanese/ki.mp3" },
        { letter: "く", sound: "/sounds/japanese/ku.mp3" },
        { letter: "け", sound: "/sounds/japanese/ke.mp3" },
        { letter: "こ", sound: "/sounds/japanese/ko.mp3" },
        { letter: "さ", sound: "/sounds/japanese/sa.mp3" },
        { letter: "し", sound: "/sounds/japanese/shi.mp3" },
        { letter: "す", sound: "/sounds/japanese/su.mp3" },
        { letter: "せ", sound: "/sounds/japanese/se.mp3" },
        { letter: "そ", sound: "/sounds/japanese/so.mp3" },
        { letter: "た", sound: "/sounds/japanese/ta.mp3" },
        { letter: "ち", sound: "/sounds/japanese/chi.mp3" },
        { letter: "つ", sound: "/sounds/japanese/tsu.mp3" },
        { letter: "て", sound: "/sounds/japanese/te.mp3" },
        { letter: "と", sound: "/sounds/japanese/to.mp3" },
        { letter: "な", sound: "/sounds/japanese/na.mp3" },
        { letter: "に", sound: "/sounds/japanese/ni.mp3" },
        { letter: "ぬ", sound: "/sounds/japanese/nu.mp3" },
        { letter: "ね", sound: "/sounds/japanese/ne.mp3" },
        { letter: "の", sound: "/sounds/japanese/no.mp3" },
        { letter: "は", sound: "/sounds/japanese/ha.mp3" },
        { letter: "ひ", sound: "/sounds/japanese/hi.mp3" },
        { letter: "ふ", sound: "/sounds/japanese/fu.mp3" },
        { letter: "へ", sound: "/sounds/japanese/he.mp3" },
        { letter: "ほ", sound: "/sounds/japanese/ho.mp3" },
        { letter: "ま", sound: "/sounds/japanese/ma.mp3" },
        { letter: "み", sound: "/sounds/japanese/mi.mp3" },
        { letter: "む", sound: "/sounds/japanese/mu.mp3" },
        { letter: "め", sound: "/sounds/japanese/me.mp3" },
        { letter: "も", sound: "/sounds/japanese/mo.mp3" },
        { letter: "や", sound: "/sounds/japanese/ya.mp3" },
        { letter: "ゆ", sound: "/sounds/japanese/yu.mp3" },
        { letter: "よ", sound: "/sounds/japanese/yo.mp3" },
        { letter: "ら", sound: "/sounds/japanese/ra.mp3" },
        { letter: "り", sound: "/sounds/japanese/ri.mp3" },
        { letter: "る", sound: "/sounds/japanese/ru.mp3" },
        { letter: "れ", sound: "/sounds/japanese/re.mp3" },
        { letter: "ろ", sound: "/sounds/japanese/ro.mp3" },
        { letter: "わ", sound: "/sounds/japanese/wa.mp3" },
        { letter: "を", sound: "/sounds/japanese/wo.mp3" },
        { letter: "ん", sound: "/sounds/japanese/n.mp3" }
    ];

    const playSound = (letter) => {
        const speech = new SpeechSynthesisUtterance(letter);
        speech.lang = "ja-JP";
    
        const voices = window.speechSynthesis.getVoices();
        speech.voice = voices.find(voice => voice.lang === "ja-JP") || voices[0];
    
        window.speechSynthesis.speak(speech);
    };    

    return (
        <div className="japanese-background">
            <h1 className="quote">Alphabets</h1>
            <div className="alphabet-container">
                {hiragana.map((alphabet, index) => (
                    <button key={index} className="alphabet-box" onClick={() => playSound(alphabet.letter)}>
                        <h3>{alphabet.letter}</h3>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default JapaneseAlphabets;
