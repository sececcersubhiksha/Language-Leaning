const FrenchWebsite = () => {
    const platforms = [
        {
            name: "Duolingo",
            description: "A fun and interactive way to learn French with gamified lessons.",
            link: "https://www.duolingo.com/course/fr/en/Learn-French"
        },
        {
            name: "BBC Languages - French",
            description: "Free resources for beginners and advanced learners.",
            link: "https://www.bbc.co.uk/languages/french/"
        },
        {
            name: "Coursera",
            description: "University-level French courses from top institutions.",
            link: "https://www.coursera.org/courses?query=french"
        },
        {
            name: "Udemy",
            description: "Affordable courses on French grammar, conversation, and pronunciation.",
            link: "https://www.udemy.com/courses/search/?q=french"
        },
        {
            name: "Frantastique",
            description: "Personalized daily lessons to improve French skills effectively.",
            link: "https://www.frantastique.com/en"
        }
    ];

    return (
        <div className="french-background">
            <h2 className="top">Top French Learning Platforms</h2>
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

export default FrenchWebsite;
