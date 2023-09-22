import { useReducer } from "react";
import { Input } from "./Input";

enum ActionType {
  setNome = "setNome",
  setEmail = "setEmail",
}

interface Action {
  type: ActionType;
  payload: string;
}

interface UserState {
  nome: string;
  email: string;
}

function formReducer(state: UserState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case ActionType.setNome:
      return {
        ...state,
        nome: payload,
      };
    default:
      return state;
  }
}

export const Form = () => {
  const [state, dispatch] = useReducer(formReducer, { nome: "", email: "" });
  return (
    <div>
      <Input
        label={`Nome: ${state.nome}`}
        id="name"
        style={{ marginBottom: "10px" }}
        onChange={({ target }) =>
          dispatch({ type: ActionType.setNome, payload: target.value })
        }
      />
      <Input label="Email:" id="email" />
    </div>
  );
};
