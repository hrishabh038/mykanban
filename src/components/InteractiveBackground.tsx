import { useEffect, useState } from "react";

const InteractiveBackground = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Mouse glow */}
      <div
        className="absolute h-[420px] w-[420px] rounded-full bg-indigo-500/25 blur-3xl transition-transform duration-200"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Secondary glow */}
      <div className="absolute bottom-[-120px] right-[-120px] h-[360px] w-[360px] rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
    </div>
  );
};

export default InteractiveBackground;
