"use client";

import useMousePosition from "../../../../hooks/use-mouse";

function LightBackground() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none lg:fixed inset-0 z-30"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}

export default LightBackground;
