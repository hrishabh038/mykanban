import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  usingFor: string;
  id: string;
  className?: string
};

export const UniqueIdentifier = ({ id, usingFor, className  }: Props) => {
  return (
    <span className={twMerge("text-xs text-neutral-500 tracking-widest uppercase flex gap-0.5", className)}>
      <span>{usingFor}</span>
      <span>#</span>
      <span className="text-purple-400">{id.toUpperCase()}</span>
    </span>
  );
};
