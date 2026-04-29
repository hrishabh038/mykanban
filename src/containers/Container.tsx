import React from "react";

interface ContainerProps {
  heading: string;
  children: React.ReactNode;
  className?: string
}

const Container = ({ heading, children, className }: ContainerProps) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-2">
        {heading}
      </span>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Container;
