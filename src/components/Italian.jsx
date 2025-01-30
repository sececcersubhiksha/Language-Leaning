import ItalianAlphabets from "./ItalianAlphabets";

const Italian = ({navigateTo}) => {
    
return (
    <>
    <div className="italian-background">
        <h1 className="quote"><b>Fluent Futures: Unlock Your Italian Potential!🚀📖</b></h1>
        <button className="basics" onClick={()=>{navigateTo('italianalphabets')}}>Alphabets</button>
    </div>
    </>
);
}

export default Italian;
