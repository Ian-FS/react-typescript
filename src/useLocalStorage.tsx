import React, { useEffect, useState } from "react";

const useLocalStorage = (
  key: string,
  volumeInicial: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : volumeInicial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
export default useLocalStorage;
