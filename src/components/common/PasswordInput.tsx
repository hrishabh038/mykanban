import { useState } from "react";
import { LockIcon, LockOpenIcon } from "../../assets/icons/icons";
import type { InputHTMLAttributes } from "react";

type PasswordInputProps = {
  label: string;
  error?: string;
  forgotPasswordPath?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const PasswordInput = ({
  label,
  error,
  forgotPasswordPath = "/forgot-password",
  id,
  className = "",
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      <label htmlFor={inputId} className="text-sm font-medium text-neutral-300">
        {label}
      </label>

      {/* Input + Toggle */}
      <div className="relative">
        <input
          id={inputId}
          type={showPassword ? "text" : "password"}
          className={`
            w-full py-2.5 px-4 pr-12 rounded
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

        <button
          type="button"
          onClick={() => setShowPassword((v) => !v)}
          className="absolute inset-y-0 right-3 flex items-center text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <LockOpenIcon size={18} /> : <LockIcon size={18} />}
        </button>
      </div>

      {/* Error + Forgot password */}
      {error && (
        <div className="flex items-center justify-between">
          <span className="text-xs text-red-500">{error}</span>

          <a
            href={forgotPasswordPath}
            className="text-xs text-neutral-400 hover:text-neutral-200 underline underline-offset-2"
          >
            Forgot password?
          </a>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
