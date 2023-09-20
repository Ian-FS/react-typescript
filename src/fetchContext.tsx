// Utilize a API: https://data.origamid.dev/usuarios/1

import { createContext, useState } from "react";
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
export type userDataType = {
  data: user | null;
  loading: boolean;
  error?: string | null;
};

export const MyFetchContext = createContext<userDataType | null>(null);

export const MyFetchContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const { data, loading } = useFetch<user>(
    "https://data.origamid.dev/usuarios/1"
  );

  return (
    <MyFetchContext.Provider value={{ data, loading }}>
      {children}
    </MyFetchContext.Provider>
  );
};
