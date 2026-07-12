import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`container-bs ${className}`} style={style}>
      {children}
    </div>
  );
}
