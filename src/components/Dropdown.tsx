import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface DropdownMenuItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "danger";
  disabled?: boolean;
}

interface DropdownMenuGroup {
  group?: string;
  items: DropdownMenuItem[];
}

interface DropdownProps {
  trigger: React.ReactNode;
  align?: "left" | "right";
  header?: {
    title: string;
    subtitle?: string;
  };
  menu: DropdownMenuGroup[];
}

export const Dropdown = ({
  menu,
  trigger,
  align = "right",
  header,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div>{trigger}</div>

      <div
        className={twMerge(
          "border-1 border-neutral-600 bg-neutral-900 rounded absolute top-[58px] right-0 min-w-[200px] hover:border-purple-900",
          align === "left" && "right-auto left-0",
        )}
      >
        {header && (
          <>
            <div className="flex flex-col px-4 py-2">
              <span className="text-sm">{header.title}</span>
              <span className="text-xs text-neutral-500">
                {header.subtitle}
              </span>
            </div>
            <div className="border-t border-neutral-600"></div>
          </>
        )}

        {menu.map((group, key) => (
          <>
            <div className="p-2 text-sm" key={key}>
              {group.group && (
                <p className="px-2 pb-2 text-neutral-500 uppercase font-semibold text-[10px] tracking-wider">
                  {group.group}
                </p>
              )}
              {group.items.map((item, itemKey) => (
                <ItemButton
                  key={itemKey}
                  label={item.label}
                  disabled={item.disabled}
                  onClick={item.onClick}
                  variant={item.variant}
                  icon={item.icon}
                />
              ))}
            </div>
            {key !== menu.length - 1 && (
              <div className="border-t border-neutral-600"></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

const ItemButton = ({
  label,
  disabled,
  icon,
  onClick,
  variant = "default",
}: DropdownMenuItem) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "hover:bg-purple-500/15 rounded px-2 py-1.5 w-full text-left cursor-pointer",
        variant === "danger" && "text-red-500 hover:bg-red-500/15",
      )}
    >
      {label}
    </button>
  );
};
