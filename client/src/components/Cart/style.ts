import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 320px;
  border-radius: 12px;

  & > div:nth-child(1) {
    width: 100%;
    height: 56px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    border-radius: 12px 12px 0px 0px;
    background-color: var(--color-primary);

    padding: 23px 23px 19px 23px;

    & > p {
      font-weight: 500;
      font-size: 16px;
      line-height: 27px;

      margin-left: 20px;
      color: var(--color-white);
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    height: 296px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--grey-1);
    border-radius: 0px 0px 12px 12px;

    & > p {
      width: 100%;
      max-width: 243px;

      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-align: center;

      color: var(--grey-3);
      margin-top: 31px;
    }
  }
`;

export { Container };
