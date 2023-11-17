interface FastAPIBoxProps {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const FastAPIBox = ({ title, subtitle, imageUrl }: FastAPIBoxProps) => {
    return (
        <div
            className='relative bg-center bg-cover h-full w-full'
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        >
            <div className='absolute inset-0 flex flex-col justify-center items-center p-4'>
                <h2 className='text-primary text-2xl font-semibold'>{title}</h2>
                <p className='text-primary-muted text-sm font-semibold'>{subtitle}</p>
            </div>
        </div>
    );
};

export default FastAPIBox;
