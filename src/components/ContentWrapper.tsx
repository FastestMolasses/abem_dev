type ContentWrapperProps = {
    children: React.ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapperProps) => {
    return (
        <div className='max-w-4xl mx-auto px-4'>{children}</div>
    );
};

export default ContentWrapper;
