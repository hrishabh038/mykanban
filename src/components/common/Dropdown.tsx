import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type DropdownMenuItem = {
  label: string;
  to?: string; // for navigation
  onClick?: () => void; // for actions like logout
};

type DropdownProps = {
  buttonLabel?: string;
  icon?: React.ReactNode; // icon trigger
  items: DropdownMenuItem[];
};

const Dropdown = ({ buttonLabel = "Dropdown", icon, items }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleItemClick = (item: DropdownMenuItem) => {
    setOpen(false);
    if (item.onClick) item.onClick();
  };

  // close on click outside
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={handleToggle}
        className={twMerge(
          "flex items-center gap-2 p-2 rounded border border-neutral-800 hover:bg-neutral-800/70 text-sm cursor-pointer",
          open && "bg-neutral-800"
        )}
      >
        {/* if icon passed show icon, else show label */}
        {icon ? icon : buttonLabel}
        {!icon && <span className="text-xs">{open ? "▲" : "▼"}</span>}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 rounded-md border border-neutral-800 bg-neutral-950 shadow-lg z-50">
          <div className="py-1">
            {items.map((item) => {
              const content = (
                <div
                  className="w-full text-left px-4 py-2 text-sm hover:bg-purple-500/10 cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  {item.label}
                </div>
              );

              return item.to ? (
                <Link key={item.label} to={item.to}>
                  {content}
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  className="w-full text-left"
                >
                  {content}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
