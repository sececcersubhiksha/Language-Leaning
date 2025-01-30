const GermanWebsite = () => {
    const platforms = [
        {
            name: "Duolingo",
            description: "A fun and interactive way to learn German with gamified lessons.",
            link: "https://www.duolingo.com/course/de/en/Learn-German"
        },
        {
            name: "BBC Languages - German",
            description: "Free German language resources for beginners and advanced learners.",
            link: "https://www.bbc.co.uk/languages/german/"
        },
        {
            name: "Goethe-Institut",
            description: "Official German courses from the cultural institute of Germany.",
            link: "https://www.goethe.de/en/spr/kur.html"
        },
        {
            name: "Coursera",
            description: "University-level German courses from top institutions.",
            link: "https://www.coursera.org/courses?query=german"
        },
        {
            name: "Udemy",
            description: "Affordable German courses covering grammar, conversation, and pronunciation.",
            link: "https://www.udemy.com/courses/search/?q=german"
        },
        {
            name: "Deutsche Welle (DW)",
            description: "High-quality German lessons from beginner to advanced levels.",
            link: "https://learngerman.dw.com/en/overview"
        }
    ];

    return (
        <div className="german-background">
            <h2 className="top">Top German Learning Platforms</h2>
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

export default GermanWebsite;
