import SpanishAlphabets from "./SpanishAlphabets";

const Spanish = ({navigateTo}) => {
    
return (
    <>
    <div className="spanish-background">
        <h1 className="quote"><b>Fluent Futures: Unlock Your Spanish Potential!🚀📖</b></h1>
        <button className="basics" onClick={()=>{navigateTo('spanishalphabets')}}>Alphabets</button>
    </div>
    </>
);
}

export default Spanish;
