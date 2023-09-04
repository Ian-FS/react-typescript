import React, { useEffect, useState } from "react";
import { Input } from "./Input";

function App() {
  type venda = {
    id: string;
    nome: string;
    status: string;
  };

  const [dados, setDados] = React.useState<null | venda[]>([
    { id: "1", nome: "pedro", status: "peocessando" },
  ]);
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.currentTarget.id === "inicio") {
      setDataInicial(event.currentTarget.value);
      console.log(dataInicial);
    }
    if (event.currentTarget.id === "final") {
      setDataFinal(event.currentTarget.value);
      console.log(dataFinal);
    }
  };

  useEffect(() => {
    if (dataInicial !== "" && dataFinal !== "")
      fetch(
        `https://data.origamid.dev/vendas/?inicio=${dataInicial}&final=${dataFinal}`
      )
        .then((res) => res.json())
        .then((dados: venda[]) => setDados(dados as venda[]))
        .catch((error) => console.log(error));
  }, [dataInicial, dataFinal]);

  return (
    <div>
      <div>
        <Input
          id="inicio"
          label="Inicio"
          type="date"
          onChange={handleChange}
          value={dataInicial}
        />
        <Input
          id="final"
          label="Fim"
          type="date"
          onChange={handleChange}
          value={dataFinal}
        />
      </div>
      <div>
        <ul>{dados}</ul>
      </div>
    </div>
  );
}

export default App;
