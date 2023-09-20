import React, { useContext } from "react";
import { MyFetchContext } from "./fetchContext";

const Header = () => {
  const context = useContext(MyFetchContext);
  return <h1>{context?.data?.nome}</h1>;
};

export default Header;
