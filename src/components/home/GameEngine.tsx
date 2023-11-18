const GameEngine = () => {
    return (
        <div
            className='relative bg-center bg-cover h-full w-full'
            style={{
                backgroundImage: `url(wireframe5.jpg)`,
            }}
        >
            <div className='absolute inset-0 flex flex-col justify-center items-center p-4'>
                <h2 className='text-accent-muted text-2xl font-semibold'>
                    3AM Engine
                </h2>
                <p className='text-secondary-muted text-sm font-semibold'>
                    Custom game engine built in Rust
                </p>
            </div>
        </div>
    );
};

export default GameEngine;
