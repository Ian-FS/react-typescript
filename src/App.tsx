import React from "react";
import Button from "./Button";
import { Input } from "./Input";
import { ButtonExerc } from "./ButtonExerc";
import { CheckBox } from "./CheckBox";

function User() {
  return {
    nome: "Ian",
    profissao: "desenvolvedor front-end",
  };
}

type userProps = {
  nome: string;
  profissao: string;
};

function App() {
  const [data, setData] = React.useState<null | userProps>(null);
  const [total, setTotal] = React.useState(0);
  const [valor, setValor] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }
  function resetar() {
    setTotal(0);
  }

  function carregaDados() {
    setData(User());
    console.log(data);
    return data;
  }

  return (
    <div>
      <Input id="inicio" tamanho="1.5rem" label="Inicio" type="date" />
      <Input id="final" tamanho="1.5rem" label="Fim" type="date" />
    </div>
  );
}

export default App;
