const Game2D = () => {
    return (
        <div
            className='relative bg-center bg-cover h-full w-full'
            style={{
                backgroundImage: `url(game2d.png)`,
            }}
        >
            <div className='absolute inset-0 flex flex-col justify-center items-center p-4'>
                <h1 className='text-primary text-3xl font-semibold'>Realms</h1>
                <p className='text-primary-muted text-sm font-semibold'>
                    Mobile RPG game
                </p>
            </div>
        </div>
    );
};

export default Game2D;
