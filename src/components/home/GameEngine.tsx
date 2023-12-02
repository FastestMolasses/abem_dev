const GameEngine = () => {
    return (
        <div className='relative h-full w-full border-2 overflow-clip'>
            {/* Background layer */}
            <div
                className='absolute inset-0 bg-center bg-cover blur-[2px]'
                style={{
                    backgroundImage: `url(wireframe5.jpg)`,
                    backgroundSize: '125%',
                }}
            />
            {/* Gradient overlay from black to transparent */}
            <div
                className='absolute inset-0'
                style={{
                    background: 'linear-gradient(to right, black, transparent)',
                }}
            />
            {/* Content layer */}
            <div className='relative flex flex-col justify-center items-center p-4 h-full w-full'>
                <h2 className='text-accent-muted text-2xl font-semibold'>
                    Amber Engine
                </h2>
                <p className='text-secondary-muted text-sm font-semibold'>
                    Custom game engine built in Rust
                </p>
            </div>
        </div>
    );
};

export default GameEngine;
