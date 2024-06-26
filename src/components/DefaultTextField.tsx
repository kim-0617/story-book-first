import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextFieldProps {
  id: string;
  errorMessage: string;
  value: string;
  placeholder: string;
  isError: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DefaultTextField({ id, errorMessage, value, placeholder, isError, onClick, onChange }: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const borderColor = isFocused ? 'border-secondary' : !value ? 'border-mono300 ' : 'border-primary';

  return (
    <div className="relative">
      <div
        className={`text-primary border-b ${borderColor}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          id={id}
          className="outline-none"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {!!value &&
          <IconButton
            iconPath="/vite.svg"
            alt="delete-icon"
            onClick={onClick}
          />
        }
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
}