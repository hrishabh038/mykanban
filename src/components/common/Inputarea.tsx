import type { InputHTMLAttributes } from "react";

type InputAreaProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputArea = ({
  label,
  error,
  id,
  className = "",
  ...props
}: InputAreaProps) => {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-neutral-300"
      >
        {label}
      </label>

      <input
        id={inputId}
        className={`
          py-2.5 px-4 rounded
          bg-transparent
          border border-neutral-800
          text-neutral-100
          placeholder:text-neutral-500
          outline-none
          transition-colors
          focus:border-neutral-600
          focus:ring-1 focus:ring-neutral-600
          hover:border-neutral-700
          ${error ? "border-red-500 focus:ring-red-500" : ""}
          ${className}
        `}
        {...props}
      />

      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  );
};

export default InputArea;
