import SpanishAlphabets from "./SpanishAlphabets";
import SpanishWebsite from "./SpanishWebsite";

const Spanish = ({ navigateTo }) => {
  return (
    <>
      <div className="spanish-background">
        <h1 className="quote">
          <b>¡Habla Español! Unlock the World of Spanish! 🇪🇸📖</b>
        </h1>
        <h1>
          <b>
            <pre>       Alphabets - 27 letters</pre>
          </b>
        </h1>
        <pre>
          <b>                 📖Spanish uses the same 26 letters as English, plus "Ñ" (eñe).</b>
          <br />
        </pre>
        <pre>
          <b>                 📖The letters "K" and "W" appear mostly in foreign words.</b>
          <br />
        </pre>
        <pre>
          <b>                 📖Spanish pronunciation is mostly phonetic, meaning words are pronounced as written.</b>
          <br />
        </pre>
        <h1 className="pronounce">
          To learn the pronunciation of the alphabets
          <br />
          Click Below
        </h1>
        <button className="basics" onClick={() => navigateTo("spanishalphabets")}>
          Alphabets
        </button>
        <h1 className="website-name">
          To know the top websites to learn Spanish
          <br />
          Click Below
        </h1>
        <button className="website" onClick={() => navigateTo("spanishwebsite")}>
          Website
        </button>
      </div>
    </>
  );
};

export default Spanish;
