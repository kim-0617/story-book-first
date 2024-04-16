interface IIconButtonProps {
    iconPath: string;
    alt: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({ iconPath, alt, onClick }: IIconButtonProps) {
    return (
        <button
            onClick={onClick}
            className="text-sm text-primary w-4"
        >
            <img src={iconPath} alt={alt} />
        </button>
    )
}