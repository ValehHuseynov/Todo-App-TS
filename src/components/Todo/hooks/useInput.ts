import React, { useState } from "react";

export const useInput = (initalValue: string) => {
  const [value, setValue] = useState<string>(initalValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return [value, handleChange, handleReset] as const;
};
