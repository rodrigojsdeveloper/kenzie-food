import styled from "styled-components";

const Container = styled.div`
  & > img {
    width: 35px;
    height: 35px;

    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .menuOpen {
    display: flex;
  }

  .menuClose {
    display: none;
  }

  & > div {
    width: 206px;
    height: 127px;

    position: absolute;
    top: 60px;
    right: 20px;

    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    z-index: 2000;

    padding: 10px 0;
    background-color: var(--color-white);
    box-shadow: 0px 4px 38px var(--shadow-2);

    & > h2 {
      font-size: 19px;
      font-weight: 500;
      line-height: 24px;

      color: var(--grey-4);
    }

    & > hr {
      width: 100%;
      background-color: var(--grey-2);
      height: 1px;
    }
  }
`;

export { Container };
