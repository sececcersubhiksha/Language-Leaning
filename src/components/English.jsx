import EnglishAlphabets from "./EnglishAlphabets";
import EnglishWebsite from "./EnglishWebsite";

const English = ({navigateTo}) => {
    
return (
    <>
    <div className="english-background">
        <h1 className="quote"><b>Fluent Futures: Unlock Your English Potential!🚀📖</b></h1>
        <h1><b><pre>       Alphabets - 26 letters</pre></b></h1>
        <pre><b>                 📖Each letter has an uppercase ("capital letter") and a lowercase ("small letter") form.</b><br/></pre>
        <pre><b>                 📖Five of the letters in the English Alphabet are vowels: A, E, I, O, U.</b><br/></pre>
        <pre><b>                 📖The remaining 21 letters are consonants: B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, X, Z,<br/>
        <pre>                    and usually W and Y.</pre></b></pre>
        <h1 className="pronounce">To know the pronounciation of the alphabets<br/>Click Below</h1>
        <button className="basics" onClick={()=>{navigateTo('englishalphabets')}}>Alphabets</button>
        <h1 className="website-name">To know the top websites to learn English<br/>Click Below</h1>
        <button className="website" onClick={()=>{navigateTo('englishwebsite')}}>Website</button>
    </div>
    </>
);
}

export default English;
