import { cn } from '@/lib/utils';

type NavigationButtonProps = {
    name: string;
    href: string;
    isActive: boolean;
};

const NavigationButton = ({ name, href, isActive }: NavigationButtonProps) => {
    return (
        <a
            href={href}
            className={cn(
                'text-primary-muted hover:bg-secondary hover:text-primary px-3 py-1.5 rounded',
                {
                    'bg-secondary text-primary': isActive,
                },
            )}
        >
            {name}
        </a>
    );
};

export default NavigationButton;
