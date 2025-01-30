const EnglishWebsite = () => {
    const platforms = [
        {
            name: "Duolingo",
            description: "A gamified language learning app with bite-sized lessons.",
            link: "https://www.duolingo.com/"
        },
        {
            name: "BBC Learning English",
            description: "Offers free courses, videos, and grammar lessons.",
            link: "https://www.bbc.co.uk/learningenglish"
        },
        {
            name: "Coursera",
            description: "University-level courses from top institutions.",
            link: "https://www.coursera.org/courses?query=english"
        },
        {
            name: "Udemy",
            description: "Affordable courses on English speaking, writing, and business English.",
            link: "https://www.udemy.com/courses/search/?q=english"
        },
        {
            name: "Busuu",
            description: "A language learning app that offers interactive English courses, AI- powered feedback, and practice with native speakers." ,
            link: "https//www.busuu.com/" 
        }
    ];

return (
    <div className="english-background">
        <h2 className="top">Top English Learning Platforms</h2>
        <div className="platforms">
            {platforms.map((platform, index) => (
                <div className="platform-container">
                    <h3>{platform.name}</h3>
                    <p>{platform.description}</p>
                    <a href={platform.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
                    <br />
                </div>
            ))}

        </div>
    </div>
);
}

export default EnglishWebsite;
