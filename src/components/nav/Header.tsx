import { cn } from '@/lib/utils';

type HeaderProps = {
    activePath: string;
};

const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Compositions', href: '/compositions' },
    { name: 'Models', href: '/models' },
];

const Header = ({ activePath }: HeaderProps) => {
    return (
        <header className='ppneue font-light'>
            {/* Site title */}
            <div className='flex justify-between items-center mt-8'>
                <h1 className='text-3xl space-text'>Abe M</h1>
                <p className='text-3xl space-text'>Software Engineer</p>
            </div>

            <div className='flex justify-between items-center mt-3 mb-6'>
                {/* Page links */}
                <nav className='flex gap-1'>
                    {navigationItems.map((item) => (
                        <a
                            href={item.href}
                            key={item.href}
                            className={cn(
                                'text-primary-muted hover:text-accent-muted mr-3',
                                {
                                    // Highlight the current page, but only check the alphanumeric characters
                                    'text-accent-muted':
                                        activePath
                                            .toLowerCase()
                                            .replace(/\W/g, '') ===
                                        item.href
                                            .toLowerCase()
                                            .replace(/\W/g, ''),
                                },
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className='text-primary-muted flex h-3 items-center space-x-2 mr-1'>
                    <a
                        href='https://github.com/FastestMolasses'
                        target='_blank'
                        className='hover:text-accent-muted'
                    >
                        Github
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
