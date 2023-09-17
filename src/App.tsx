import { useState } from "react";
import useFetch from "./useFetch";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};
function App() {
  const [id, setId] = useState("p001");

  const produtos = useFetch<[Produto]>("https://data.origamid.dev/produtos");
  const produto = useFetch<Produto>(
    `https://data.origamid.dev/produtos/${id}`,
    {
      cache: "force-cache",
    }
  );

  return (
    <section className="flex">
      <div>
        {produtos.loading ? (
          <h1>CARREGANDO...</h1>
        ) : (
          <ul>
            {produtos.data?.map((produto) => (
              <button onClick={() => setId(produto.id)} key={produto.id}>
                {produto.id}
              </button>
            ))}
          </ul>
        )}
      </div>
      <div>
        {produto.loading && <div>CARREGANDO...</div>}
        {produto.data && (
          <ul>
            <li>
              <b>Nome:</b> {produto.data.nome}
            </li>
            <li>
              <b>Descrição:</b> {produto.data.descricao}
            </li>
            <li>
              <b>Preço:</b> R$: {produto.data.preco.toFixed(2)}
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default App;
