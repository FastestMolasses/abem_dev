import { Badge } from '@/components/ui/badge';

const Game2D = () => {
    return (
        <div className='relative h-full w-full'>
            {/* Background layer */}
            <div
                className='absolute inset-0 bg-center bg-cover'
                style={{
                    backgroundImage: `url(game2d_01.png)`,
                    backgroundSize: '125%',
                }}
            />
            <div className='absolute inset-0 bg-black opacity-25' />
            {/* Content layer */}
            <div className='absolute inset-0 flex flex-col justify-end p-2'>
                {/* Text background blur */}
                <div className='flex bg-white/10 backdrop-blur-xl rounded-lg px-4 py-2 leading-tight items-center'>
                    <div>
                        <h1 className='text-primary text-xl font-semibold'>
                            Realms
                        </h1>
                        <p className='text-gray-300 text-xs -mt-1'>iOS &bull; Coming Soon</p>
                    </div>

                    <div className='ml-auto hidden md:block'>
                        <Badge variant='secondary' className='text-[10px] px-6 py-1 font-semibold text-link bg-[#F2F2F7] rounded-full'>Get</Badge>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game2D;
