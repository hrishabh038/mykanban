import { twMerge } from "tailwind-merge";
import { LogoSvg } from "../assets/images/images";

interface LogoProps {
  svgClassName?: string;
  textClassName?: string;
}

export const Logo = ({ svgClassName, textClassName }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={LogoSvg}
        alt="Logo"
        className={twMerge("w-6 h-6", svgClassName)}
      />
      <span
        className={twMerge(
          " text-xl logo-font uppercase bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent",
          textClassName,
        )}
      >
        my kanban
      </span>
    </div>
  );
};
