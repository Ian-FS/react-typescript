import React, { Dispatch, useEffect, useState } from "react";

export const useLocalStorage = (
  key: string,
  value: string
): [string, Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = useState(() =>
    window.localStorage.getItem(key)
      ? (window.localStorage.getItem(key) as string)
      : value
  );

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};
