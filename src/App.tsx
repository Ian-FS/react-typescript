import React, { useEffect, useState } from "react";
import { Input } from "./Input";

function App() {
  type venda = {
    id: string;
    nome: string;
    status: string;
  };

  const [data, setData] = useState<null | venda[]>(null);
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
        .then((dados: venda[]) => {
          dados.forEach((dado) => {
            console.log(`${dado.nome}: ${dado.status}`);
          });
        });
  }, [dataInicial, dataFinal]);

  return (
    <div>
      <div>
        <Input id="inicio" label="Inicio" type="date" onChange={handleChange} />
        <Input id="final" label="Fim" type="date" onChange={handleChange} />
      </div>
      <div>
        <ul>
          {data &&
            data.map((venda) => {
              <li key={venda.id}>
                {venda.nome}: ${venda.status}
              </li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
