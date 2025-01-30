const SpanishWebsite = () => {
    const platforms = [
        {
            name: "Duolingo",
            description: "A fun and interactive way to learn Spanish with gamified lessons.",
            link: "https://www.duolingo.com/course/es/en/Learn-Spanish"
        },
        {
            name: "BBC Languages - Spanish",
            description: "Free Spanish language resources for beginners and advanced learners.",
            link: "https://www.bbc.co.uk/languages/spanish/"
        },
        {
            name: "SpanishPod101",
            description: "Audio and video lessons for Spanish learners at all levels.",
            link: "https://www.spanishpod101.com/"
        },
        {
            name: "Coursera",
            description: "University-level Spanish courses from top institutions.",
            link: "https://www.coursera.org/courses?query=spanish"
        },
        {
            name: "Udemy",
            description: "Affordable courses on Spanish grammar, pronunciation, and conversation.",
            link: "https://www.udemy.com/courses/search/?q=spanish"
        },
        {
            name: "Español Automático",
            description: "Spanish listening and comprehension lessons for intermediate learners.",
            link: "https://www.espanolautomatico.com/"
        }
    ];

    return (
        <div className="spanish-background">
            <h2 className="top">Top Spanish Learning Platforms</h2>
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

export default SpanishWebsite;
