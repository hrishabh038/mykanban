import type { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  label: string;
  path?: string;
  onClick?: () => void;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  label,
  path,
  onClick,
  className = "",
  ...props
}: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (path) navigate(path);
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-neutral-800 hover:bg-neutral-700 w-full px-4 py-3 rounded font-semibold cursor-pointer transition-colors ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
