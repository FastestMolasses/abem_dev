const GithubStats = () => {
    const weeks = 10;
    const daysPerWeek = 7;
    // Sample data
    const activityData = new Array(weeks * daysPerWeek)
        .fill(0)
        .map(() =>
            Math.random() > 0.45 ? Math.floor(Math.random() * 4) + 1 : 0,
        );

    return (
        <div className='activity-chart h-full w-full'>
            {activityData.map((level, index) => (
                <div key={index} className='day' data-level={level} />
            ))}
        </div>
    );
};

export default GithubStats;
