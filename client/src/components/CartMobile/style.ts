import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 30px;
  background: rgba(0, 0, 0, 0.5);
`;

export { Container };
