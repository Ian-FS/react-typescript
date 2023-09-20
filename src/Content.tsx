import { useContext } from "react";
import { MyFetchContext } from "./fetchContext";

export const Content = () => {
  const context = useContext(MyFetchContext);
  return (
    <div>
      <h2>Preferências:</h2>
      <p>
        <b>Playback: </b>
        {context?.data?.preferencias.playback}
      </p>
      <p>
        <b>Qualidade: </b>
        {context?.data?.preferencias.qualidade}
      </p>
      <p>
        <b>Volume: </b>
        {context?.data?.preferencias.volume}
      </p>
    </div>
  );
};
