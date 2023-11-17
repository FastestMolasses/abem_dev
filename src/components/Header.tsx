import { Separator } from '@/components/ui/separator';
import NavigationBar from '@/components/nav/NavigationBar';

type HeaderProps = {
    activePath: string;
};

const Header = ({ activePath }: HeaderProps) => {
    return (
        <header className='text-sm'>
            <div className='flex justify-between items-center mt-8'>
                <h1 className='text-3xl space-text'>Abe M</h1>
                <p className='text-3xl space-text'>Software Engineer</p>
            </div>
            <div className='flex justify-between items-center mt-3 mb-6'>
                <NavigationBar activePath={activePath} />
                <div className='text-primary-muted text-sm mono flex h-3 items-center space-x-2 mr-3'>
                    <a
                        href='https://github.com/FastestMolasses'
                        target='_blank'
                        className='hover:text-accent-muted'
                    >
                        Github
                    </a>
                    <Separator orientation='vertical' />
                    <a
                        href='https://github.com/FastestMolasses'
                        target='_blank'
                        className='hover:text-accent-muted'
                    >
                        Source
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
