import IconButton from './IconButton'

interface INavigationBar {
    showTitle: boolean;
    showBackButton: boolean;
    showCloseButton: boolean;
    title?: string;
    onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    onCloseButtonCLick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavigationBar = ({
    title = '',
    showTitle,
    showBackButton,
    showCloseButton,
    onBackButtonClick = () => { },
    onCloseButtonCLick = () => { }
}: INavigationBar) => {
    return (
        <div className='w-full flex justify-between'>
            <div className='flex navigation-title-wrpper'>
                {showBackButton && <IconButton alt='back-button' iconPath='/vite.svg' onClick={onBackButtonClick} />}
                {showTitle && <h1 className='text-2xl'>{title}</h1>}
            </div>
            {showCloseButton && <IconButton alt='close-button' iconPath='/vite.svg' onClick={onCloseButtonCLick} />}
        </div>
    )
}

export default NavigationBar