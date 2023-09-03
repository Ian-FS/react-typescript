import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import { Input } from "./Input";

function App() {
  type dados = {
    nome: string;
    status: string;
  };

  const [data, setData] = useState({
    inicio: "2023/06/09",
    fim: "2023/06/15",
  });
  const [isChangeInicial, setIsChangeInicial] = useState(false);
  const [isChangeFinal, setIsChangeFinal] = useState(false);

  const trataString = (string: string) => (string = string.replace("-", "/"));

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.currentTarget.id === "inicio") {
      setData({ ...data, inicio: trataString(event.currentTarget.value) });
      console.log(data);

      setIsChangeInicial(!isChangeInicial);
      console.log(data);
    }
    if (event.currentTarget.id === "final") {
      setData({ ...data, fim: trataString(event.currentTarget?.value) });
      setIsChangeFinal(!isChangeFinal);
      console.log(data);
    }
  };

  useEffect(() => {
    fetch(
      `https://data.origamid.dev/vendas/?inicio=2023/06/14&final=2023/06/15`
    )
      .then((res) => res.json())
      .then((dados: object[]) => {
        dados.forEach((dado: dados) => {
          console.log(dado.nome, dado.status);
        });
      });
  }, [isChangeFinal, isChangeInicial]);

  return (
    <div>
      <Input id="inicio" label="Inicio" type="date" onChange={handleChange} />
      <Input id="final" label="Fim" type="date" onChange={handleChange} />
    </div>
  );
}

export default App;
