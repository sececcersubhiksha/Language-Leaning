import FrenchAlphabets from "./FrenchAlphabets";
import FrenchWebsite from "./FrenchWebsite";

const French = ({ navigateTo }) => {
  return (
    <>
      <div className="french-background">
        <h1 className="quote"><b>Parlez Français: Explore the Beauty of French! 🇫🇷📖</b></h1>
        <h1><b><pre>       Alphabets - 26 letters</pre></b></h1>
        <pre><b>                 📖French uses the same 26 letters as English.</b><br /></pre>
        <pre><b>                 📖It includes accents: é, è, ê, ë, à, â, î, ï, ô, û, ù, ü, ç.</b><br /></pre>
        <pre><b>                 📖The pronunciation differs significantly from English, with nasal
            sounds and silent letters.</b><br /></pre>
        <h1 className="pronounce">To know the pronunciation of the alphabets<br />Click Below</h1>
        <button className="basics" onClick={() => navigateTo("frenchalphabets")}>Alphabets</button>
        <h1 className="website-name">To know the top websites to learn French<br />Click Below</h1>
        <button className="website" onClick={() => navigateTo("frenchwebsite")}>Website</button>
      </div>
    </>
  );
};

export default French;
