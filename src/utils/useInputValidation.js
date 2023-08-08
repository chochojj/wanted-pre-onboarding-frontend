import { useState } from "react";

export const useInputValidation = (inputValue, ValidationFunc) => {
  const [value, setValue] = useState(inputValue);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (inputText) => {
    setValue(inputText);
    setIsValid(ValidationFunc(inputText));
  };

  return {
    value,
    isValid,
    handleChange,
  };
};
