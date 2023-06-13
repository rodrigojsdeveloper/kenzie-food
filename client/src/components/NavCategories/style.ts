import styled from "styled-components";

const Container = styled.div`
  width: 601px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 50px;

  & > button {
    & > img {
      margin-right: 15px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export { Container };
