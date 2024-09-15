import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      className={classNames("main-button", {
        "--secondary": variant === "secondary",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
