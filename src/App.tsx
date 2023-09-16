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
  const produtos = useFetch<[Produto]>("https://data.origamid.dev/produtos");

  return (
    <div>
      {produtos.loading ? (
        <h1>CARREGANDO...</h1>
      ) : (
        <ul>
          {produtos.data?.map((produto) => (
            <li key={produto.id}>
              {produto.nome} : {produto.descricao} - R$:{" "}
              {produto.preco.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
