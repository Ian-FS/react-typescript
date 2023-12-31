import React from "react";

type ButtonExercProps = {
  setValor: React.Dispatch<React.SetStateAction<number>>;
  valor: number;
};

export const ButtonExerc = ({ setValor, valor }: ButtonExercProps) => {
  return (
    <div>
      <button onClick={() => setValor(valor + 1)}>{valor}</button>
    </div>
  );
};
