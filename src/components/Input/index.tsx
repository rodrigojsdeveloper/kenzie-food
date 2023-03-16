import { InputContainer, CustomInput, Label } from "./style";
import { useState } from "react";

interface InputProps {
  label: string;
  type: React.HTMLInputTypeAttribute;
}

const Input = ({ label, type }: InputProps) => {
  const [hasValue, setHasValue] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(Boolean(event.target.value));
  };

  return (
    <InputContainer>
      <CustomInput
        type={type}
        autoComplete="off"
        onChange={handleInputChange}
        className={hasValue ? "has-value" : ""}
        required={true}
      />
      <Label className={hasValue ? "has-value" : ""}>{label}</Label>
    </InputContainer>
  );
};

export { Input };
