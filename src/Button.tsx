import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  tamanho?: string;
};

const Button = ({ tamanho, ...props }: ButtonProps) => {
  return <button style={{ fontSize: tamanho }} {...props} />;
};

export default Button;
