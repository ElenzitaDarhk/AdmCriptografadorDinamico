"use client";

import { ButtonHTMLAttributes, FC } from "react";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children,
  className,
  ...props
}) => (
  <button
    className={className}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);