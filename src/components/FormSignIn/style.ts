import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 450px;
  height: 450px;

  border: 1px solid var(--grey-2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  padding: 20px;

  & > form {
    width: 100%;

    & > p {
      width: 100%;
      max-width: 280px;

      font-size: 14px;
      font-weight: 400;
      line-height: 16px;

      text-align: center;
      color: var(--grey-3);

      padding: 25px 0;
      margin: 0 auto;
    }
  }
`;

export { Container };
