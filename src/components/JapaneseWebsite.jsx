const JapaneseWebsite = () => {
    const platforms = [
        {
            name: "Duolingo",
            description: "A fun and interactive way to learn Japanese with gamified lessons.",
            link: "https://www.duolingo.com/course/ja/en/Learn-Japanese"
        },
        {
            name: "NHK World - Learn Japanese",
            description: "Official Japanese lessons with audio, text, and cultural insights.",
            link: "https://www.nhk.or.jp/lesson/english/"
        },
        {
            name: "Tofugu",
            description: "Comprehensive Japanese learning resources, kanji guides, and grammar tips.",
            link: "https://www.tofugu.com/"
        },
        {
            name: "Coursera",
            description: "University-level Japanese courses from top institutions.",
            link: "https://www.coursera.org/courses?query=japanese"
        },
        {
            name: "Udemy",
            description: "Affordable Japanese courses covering speaking, grammar, and writing.",
            link: "https://www.udemy.com/courses/search/?q=japanese"
        },
        {
            name: "JapanesePod101",
            description: "Audio and video lessons for Japanese learners at all levels.",
            link: "https://www.japanesepod101.com/"
        }
    ];

    return (
        <div className="japanese-background">
            <h2 className="top">Top Japanese Learning Platforms</h2>
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

export default JapaneseWebsite;
