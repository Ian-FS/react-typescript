// Utilize a API: https://data.origamid.dev/usuarios/1

import { createContext, useContext, useState } from "react";
import useFetch from "./useFetch";

// 1 - Crie um UserContext
// 2 - Use o useFetch dentro do UserContext para esportar data, loading e error
// 3 - Crie dois componentes: Header.tsx e Content.tsx e adicine ambos ao App.tsx
// 4 - Mostre o nome da pessoa em Header.tsx e as preferências em Content.tsx

export type user = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
};
type IMyfetchContext = {
  userData: object;
  setUserData: React.Dispatch<
    React.SetStateAction<{
      data: user | null;
      loading: boolean;
      error: string | null;
    }>
  >;
};

export const myFetchContext = createContext<IMyfetchContext | null>(null);

export const MyFetchContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [userData, setUserData] = useState(
    useFetch<user>("https://data.origamid.dev/usuarios/1")
  );

  return (
    <myFetchContext.Provider value={{ userData, setUserData }}>
      {children}
    </myFetchContext.Provider>
  );
};
