import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 450px;
  height: 400px;

  border: 1px solid var(--grey-2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  padding: 20px;

  & > div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > a {
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;

      color: var(--grey-3);

      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 320px) {
      height: 52.5px;
      flex-direction: column;
    }
  }

  & > form {
    width: 100%;
  }
`;

export { Container };
