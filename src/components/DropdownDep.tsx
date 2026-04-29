import { useRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DropdownMenuItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "danger";
  disabled?: boolean;
}

export interface DropdownMenuGroup {
  group?: string;
  items: DropdownMenuItem[];
}

interface DropdownProps {
  trigger: React.ReactNode;
  menu: DropdownMenuGroup[];
  header?: {
    title: string;
    subtitle?: string;
  };
  align?: "left" | "right";
  className?: string;
}

// ─── Dropdown ─────────────────────────────────────────────────────────────────

export const DropdownDep = ({
  trigger,
  menu,
  header,
  align = "right",
  className,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={ref} className={twMerge("relative inline-block", className)}>
      {/* Trigger */}
      <div onClick={() => setOpen((prev) => !prev)} className="cursor-pointer">
        {trigger}
      </div>

      {/* Menu panel */}
      {open && (
        <div
          className={twMerge(
            "absolute top-full mt-2 z-50 w-56",
            "bg-neutral-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          {/* Header block — name + email */}
          {header && (
            <>
              <div className="px-4 py-3.5">
                <p className="text-sm font-semibold text-neutral-100 leading-tight">
                  {header.title}
                </p>
                {header.subtitle && (
                  <p className="text-xs text-neutral-500 mt-0.5 truncate">
                    {header.subtitle}
                  </p>
                )}
              </div>
              <div className="border-t border-white/[0.07]" />
            </>
          )}

          {/* Menu groups */}
          {menu.map((group, groupIndex) => (
            <div key={groupIndex}>
              {group.group && (
                <p
                  className="px-4 pt-2.5 pb-1 text-[10px] font-semibold
                              tracking-widest uppercase text-neutral-600"
                >
                  {group.group}
                </p>
              )}

              <div className="py-1.5 px-2">
                {group.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    disabled={item.disabled}
                    onClick={() => {
                      if (!item.disabled) {
                        item.onClick?.();
                        setOpen(false);
                      }
                    }}
                    className={twMerge(
                      "w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md",
                      "text-sm text-left transition-colors duration-150",
                      item.variant === "danger"
                        ? "text-red-400 hover:text-red-300 hover:bg-red-500/5"
                        : "text-neutral-300 hover:text-neutral-100 hover:bg-white/5",
                      item.disabled && "opacity-40 cursor-not-allowed",
                    )}
                  >
                    {item.icon && (
                      <span className="shrink-0 text-neutral-500">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Divider between groups */}
              {groupIndex < menu.length - 1 && (
                <div className="border-t border-white/[0.07] mx-2" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
