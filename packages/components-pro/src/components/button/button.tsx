import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<ButtonProps> = (props) => {
  console.log(props.children, "children");
  const { children } = props;
  return (
    <button style={{ background: "red" }} type="button">
      {children}
    </button>
  );
};

export default Button;
export type { ButtonProps };
