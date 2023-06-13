import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  padding: 0 20px;
  margin: 50px auto 0 auto;

  & > div:nth-child(1) {
    margin-right: 73px;

    @media (max-width: 1024px) {
      margin: 0;
    }
  }

  & > div:nth-child(2) {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  & > button {
    width: 100%;
    height: 60px;

    position: fixed;
    bottom: 0;

    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 23px 23px 19px 23px;
    background-color: var(--color-primary);

    & > p {
      font-weight: 500;
      font-size: 16px;
      line-height: 27px;

      margin-left: 20px;
      color: var(--color-white);
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

export { Container };
