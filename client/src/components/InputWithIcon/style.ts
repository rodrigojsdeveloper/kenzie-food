import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 312px;
  height: 49px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  border-radius: 12px;
  background-color: var(--grey-2);
  border: 1.5px solid var(--grey-2);

  padding: 15px 17px;

  & > input {
    width: 100%;
    height: 19px;

    margin-left: 16px;
    background-color: var(--grey-2);

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;

      color: var(--grey-3);
    }

    &:focus::placeholder {
      color: var(--transparent);
    }
  }
`;

export { Container };
