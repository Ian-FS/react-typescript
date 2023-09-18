import React, { useContext } from "react";
import { myFetchContext } from "./fetchContext";

const Header = () => {
  const teste = useContext(myFetchContext);
  console.log(teste);
  return <h1>{teste}</h1>;
};

export default Header;
