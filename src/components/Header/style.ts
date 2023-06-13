import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 72px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px 65px;

  background-color: var(--color-white);
  box-shadow: 0px 0px 40px -18px var(--shadow-3);

  & > div {
    width: 100%;
    max-width: 1440px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > div:nth-child(2) {
      width: 100%;
      max-width: 421px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 1024px) {
    padding: 20px 50px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 18px;

    & > div {
      max-width: 450px;

      flex-direction: column;
      align-items: flex-start;

      & > div:nth-child(1) {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      & > div:nth-child(2) {
        width: 100%;
        max-width: unset;

        justify-content: center;
        margin-top: 15px;

        & > button {
          display: none;
        }
      }

      div {
        max-width: unset;
      }
    }
  }
`;

export { Container };
