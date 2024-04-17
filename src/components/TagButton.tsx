interface ITagButtonProps {
    isChecked: boolean;
    children: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TagButton = ({ isChecked, children, onClick }: ITagButtonProps) => {
    const bgStyle = isChecked ? "text-primary bg-white" : "text-white bg-darkOpacity"

    return (
        <button
            className={`h-[33px] px-[10px] rounded-tag-button border border-white ${bgStyle} text-sm font-medium`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default TagButton