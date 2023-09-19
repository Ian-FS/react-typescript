import React, { useContext } from "react";
import { MyFetchContext } from "./fetchContext";

const Header = () => {
  const data = useContext(MyFetchContext);
  console.log(data?.userData.data?.nome);
  return <h1>{data?.userData.data?.nome}</h1>;
};

export default Header;
