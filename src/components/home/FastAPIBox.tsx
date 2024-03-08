interface FastAPIBoxProps {
    title: string;
    imageUrl: string;
}

const FastAPIBox = ({ title, imageUrl }: FastAPIBoxProps) => {
    return (
        <div
            className='relative bg-center bg-cover h-full w-full'
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: '70% 10%',
            }}
        >
            <div className='absolute inset-0 flex flex-col text-center justify-center items-center p-4'>
                <h2 className='text-primary text-2xl font-semibold'>{title}</h2>
                <a
                    href='https://github.com/FastestMolasses/Fastest-FastAPI'
                    target='_blank'
                    className='text-link hover:text-link-hover no-underline text-sm'
                >
                    Performant Python Webserver
                </a>
            </div>
        </div>
    );
};

export default FastAPIBox;
