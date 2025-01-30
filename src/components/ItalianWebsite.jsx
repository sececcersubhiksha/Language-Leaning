const ItalianWebsite = () => {
    const platforms = [
        {
            name: "Duolingo",
            description: "A fun and interactive way to learn Italian with gamified lessons.",
            link: "https://www.duolingo.com/course/it/en/Learn-Italian"
        },
        {
            name: "BBC Languages - Italian",
            description: "Free Italian language resources for beginners and advanced learners.",
            link: "https://www.bbc.co.uk/languages/italian/"
        },
        {
            name: "ItalianPod101",
            description: "Audio and video lessons for Italian learners at all levels.",
            link: "https://www.italianpod101.com/"
        },
        {
            name: "Coursera",
            description: "University-level Italian courses from top institutions.",
            link: "https://www.coursera.org/courses?query=italian"
        },
        {
            name: "Udemy",
            description: "Affordable courses on Italian grammar, pronunciation, and conversation.",
            link: "https://www.udemy.com/courses/search/?q=italian"
        },
        {
            name: "Learn Italian with Lucrezia",
            description: "Italian language and culture lessons by a native speaker.",
            link: "https://learnitalianwithlucrezia.blog/"
        }
    ];

    return (
        <div className="italian-background">
            <h2 className="top">Top Italian Learning Platforms</h2>
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

export default ItalianWebsite;
