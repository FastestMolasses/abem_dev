const GameEngine = () => {
    return (
        <div className='relative h-full w-full'>
            {/* Background layer */}
            <div
                className='absolute inset-0 bg-center bg-cover'
                style={{
                    backgroundImage: `url(amber.webp)`,
                    backgroundSize: '125%',
                }}
            />
            {/* Overlay layer */}
            <div
                className='absolute inset-0 bg-black bg-opacity-50'
                style={{ backdropFilter: 'blur(10px)' }}
            />
            {/* Content layer */}
            <div className='relative flex flex-col justify-center items-center p-4 h-full w-full'>
                <h2 className='text-accent-muted text-2xl font-semibold'>
                    Amber Game Engine
                </h2>
                <p className='text-white-muted text-sm font-semibold'>
                    Rebuilding X360 Era Charm in Rust
                </p>
            </div>
        </div>
    );
};

export default GameEngine;
