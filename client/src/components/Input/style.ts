import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  max-width: 421px;
  height: 60px;

  position: relative;
  margin-bottom: 15px;

  input:focus + label {
    transform: translate(-0.5rem, -1.6rem) scale(0.8);
    color: var(--color-primary);
  }
`;

const CustomInput = styled.input`
  width: 100%;

  font-weight: 500;
  font-size: 16px;

  padding: 18px;
  border-radius: 4px;
  border: 1px solid var(--grey-2);
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-width: 2px;
    border-color: var(--color-primary);
  }

  &:placeholder-shown + label {
    transform: translate(0, 0) scale(1);
    color: var(--grey-3);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 18px;
  left: 15px;

  color: var(--grey-3);
  background-color: var(--color-white);
  padding: 0 5px;

  font-size: 18px;
  pointer-events: none;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out,
    font-size 0.2s ease-in-out, top 0.2s ease-in-out;

  &.has-value {
    transform: translate(-0.5rem, -1.6rem) scale(0.8);
    color: var(--grey-3);
  }
`;

export { InputContainer, CustomInput, Label };
