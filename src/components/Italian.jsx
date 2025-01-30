import ItalianAlphabets from "./ItalianAlphabets";
import ItalianWebsite from "./ItalianWebsite";

const Italian = ({ navigateTo }) => {
  return (
    <>
      <div className="italian-background">
        <h1 className="quote">
          <b>Parla Italiano: Discover the Melody of Italian! 🇮🇹📖</b>
        </h1>
        <h1>
          <b>
            <pre>       Alphabets - 21 letters</pre>
          </b>
        </h1>
        <pre>
          <b>                 📖The Italian alphabet consists of 21 letters.</b>
          <br />
        </pre>
        <pre>
          <b>                 📖It does not include J, K, W, X, and Y, except in foreign words.</b>
          <br />
        </pre>
        <pre><b>                 📖Italian pronunciation is phonetic, meaning words are pronounced as
            they are written.
          </b>
          <br />
        </pre>
        <h1 className="pronounce">
          To know the pronunciation of the alphabets
          <br />
          Click Below
        </h1>
        <button className="basics" onClick={() => navigateTo("italianalphabets")}>
          Alphabets
        </button>
        <h1 className="website-name">
          To know the top websites to learn Italian
          <br />
          Click Below
        </h1>
        <button className="website" onClick={() => navigateTo("italianwebsite")}>
          Website
        </button>
      </div>
    </>
  );
};

export default Italian;
