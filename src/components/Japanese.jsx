import JapaneseAlphabets from "./JapaneseAlphabets";
import JapaneseWebsite from "./JapaneseWebsite";

const Japanese = ({ navigateTo }) => {
  return (
    <>
      <div className="japanese-background">
        <h1 className="quote">
          <b>日本語を学ぼう: Unlock the Beauty of Japanese! 🇯🇵📖</b>
        </h1>
        <h1>
          <b>
            <pre>       Japanese Writing System</pre>
          </b>
        </h1>
        <pre>
          <b>                 📖Japanese has three writing systems: Hiragana, Katakana, and Kanji.</b>
          <br />
        </pre>
        <pre>
          <b>                 📖Hiragana (ひらがな) - Used for native Japanese words and grammatical elements.</b>
          <br />
        </pre>
        <pre>
          <b>                 📖Katakana (カタカナ) - Used for foreign words, names, and onomatopoeia.</b>
          <br />
        </pre>
        <pre><b>                 📖Kanji (漢字) - Chinese characters representing words or meanings,
            thousands in total.
          </b>
          <br />
        </pre>
        <h1 className="pronounce">
          To learn the Japanese alphabets
          <br />
          Click Below
        </h1>
        <button className="basics" onClick={() => navigateTo("japanesealphabets")}>
          Alphabets
        </button>
        <h1 className="website-name">
          To know the top websites to learn Japanese
          <br />
          Click Below
        </h1>
        <button className="website" onClick={() => navigateTo("japanesewebsite")}>
          Website
        </button>
      </div>
    </>
  );
};

export default Japanese;
