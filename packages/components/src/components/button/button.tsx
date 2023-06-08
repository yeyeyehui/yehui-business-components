import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <Button type="button">{children}</Button>;
};

export default Button;
export type { ButtonProps };
