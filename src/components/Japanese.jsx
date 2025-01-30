import JapaneseAlphabets from "./JapaneseAlphabets";

const Japanese = ({navigateTo}) => {
    
return (
    <>
    <div className="japanese-background">
        <h1 className="quote"><b>Fluent Futures: Unlock Your Japanese Potential!🚀📖</b></h1>
        <button className="basics" onClick={()=>{navigateTo('japanesealphabets')}}>Alphabets</button>
    </div>
    </>
);
}

export default Japanese;
