const CodeEdit = () => {
    return (
        <div className='code-edit-parent h-full w-full relative p-6'>
            <div className='box-border'></div>
            <div className='flex items-center'>
                <img
                    src='codeedit-icon.webp'
                    className='h-24 w-24'
                    alt='CodeEdit App Icon'
                />
                <div className='flex flex-col ml-2'>
                    <div>CodeEdit for macOS</div>
                    <div className='text-sm text-primary-muted'>
                        An Xcode-like native code editor
                    </div>
                    <div>
                        <a
                            href='https://github.com/CodeEditApp/CodeEdit'
                            target='_blank'
                            className='text-link hover:text-link-hover no-underline text-sm ppneue'
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>

            <img src='codeedit-window-dark.webp' alt='' />
        </div>
    );
};

export default CodeEdit;
