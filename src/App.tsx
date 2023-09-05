import React, { useEffect, useState } from "react";
import { Input } from "./Input";

type venda = {
  id: string;
  nome: string;
  status: string;
};

function App() {
  const [dados, setDados] = React.useState<null | venda[]>(null);
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
        .then((dados) => setDados(dados as venda[]))
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
      <ul>
        {dados?.map((dado) => (
          <li key={dado.id}>
            {dado.nome}: {dado.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
