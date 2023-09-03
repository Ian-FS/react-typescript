import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  id: string;
};

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div style={{ width: "400px" }}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...props} />
    </div>
  );
};
