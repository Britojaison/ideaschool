import { createElement, type ElementType, type HTMLAttributes, type ReactNode } from "react";
import "./StarBorder.css";

type StarBorderProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: ReactNode;
};

export default function StarBorder({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps) {
  const Component = (as ?? "button") as ElementType;

  return createElement(
    Component,
    {
      className: `star-border-container ${className}`,
      style: {
        padding: `${thickness}px 0`,
        ...style,
      },
      ...rest,
    },
    <>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="inner-content">{children}</div>
    </>,
  );
}
