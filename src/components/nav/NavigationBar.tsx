import NavigationButton from './NavigationButton';

type NavigationBarProps = {
    activePath: string;
};

const NavigationBar = ({ activePath }: NavigationBarProps) => {
    const navigationItems = [
        { name: 'Home', href: '/' },
        { name: 'Compositions', href: '/compositions' },
        { name: 'Stories', href: '/stories' },
        { name: 'Models', href: '/models' },
    ];

    return (
        <nav className='flex gap-1'>
            {navigationItems.map((item) => (
                <NavigationButton
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    isActive={activePath === item.href}
                />
            ))}
        </nav>
    );
};

export default NavigationBar;
