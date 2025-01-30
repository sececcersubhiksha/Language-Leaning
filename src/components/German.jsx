import GermanAlphabets from "./GermanAlphabets";
import GermanWebsite from "./GermanWebsite";

const German = ({ navigateTo }) => {
  return (
    <>
      <div className="german-background">
        <h1 className="quote">
          <b>Sprich Deutsch: Unlock the World of German! 🇩🇪📖</b>
        </h1>
        <h1>
          <b>
            <pre>       Alphabets - 26 letters + 4 special characters</pre>
          </b>
        </h1>
        <pre>
          <b>                 📖German uses the same 26 letters as English.</b>
          <br />
        </pre>
        <pre>
          <b>                 📖It includes special characters: Ä, Ö, Ü (Umlauts), and ß (Eszett or sharp S).</b>
          <br />
        </pre>
        <pre><b>                 📖The pronunciation of some letters differs from English, such as
            "W" sounding like "V" and "V" often pronounced as "F."
          </b>
          <br />
        </pre>
        <h1 className="pronounce">
          To know the pronunciation of the alphabets
          <br />
          Click Below
        </h1>
        <button className="basics" onClick={() => navigateTo("germanalphabets")}>
          Alphabets
        </button>
        <h1 className="website-name">
          To know the top websites to learn German
          <br />
          Click Below
        </h1>
        <button className="website" onClick={() => navigateTo("germanwebsite")}>
          Website
        </button>
      </div>
    </>
  );
};

export default German;
