import styled from "styled-components";

const Container = styled.div`
  width: 601px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  overflow-x: auto;

  margin-bottom: 50px;

  & > button {
    & > img {
      margin-right: 15px;
    }
  }
`;

export { Container };
