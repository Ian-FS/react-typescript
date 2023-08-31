import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  tamanho: string;
  label: string;
  id: string;
};

export const Input = ({ label, id, tamanho, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: tamanho }}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...props} />
    </div>
  );
};
