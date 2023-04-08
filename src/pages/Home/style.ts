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
`;

export { Container };
