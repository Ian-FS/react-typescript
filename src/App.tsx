import { useReducer } from "react";
import { Input } from "./Input";

type State = {
  nome: string;
  email: string;
};

type Action = { setNome: string; setEmail: string };

function App() {
  function reducer(state: State, action: Action) {
    return state;
  }

  const [state, dispatch] = useReducer(reducer, { nome: "", email: "" });

  return (
    <div>
      <h1>Formulário:</h1>
      <Input
        label="Nome:"
        id="name"
        style={{ marginBottom: "10px" }}
        // onChange={(target) => dispatch()}
      />
      <Input label="Email:" id="email" />
    </div>
  );
}

export default App;
