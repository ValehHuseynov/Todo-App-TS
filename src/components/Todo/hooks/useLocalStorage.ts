import { useState, useEffect } from "react";
import { Todos } from "../typesAndInterfaces";

const useLocalStorage = (key: string, initalValue: Todos[]) => {
  const [state, setState] = useState<Todos[]>(() => {
    let value: Todos[];
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(initalValue)
      );
    } catch (error) {
      value = initalValue;
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState] as const;
};

export default useLocalStorage;
