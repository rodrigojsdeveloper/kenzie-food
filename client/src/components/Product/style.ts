import styled from "styled-components";

const Container = styled.div`
  width: 303px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 0 10px 40px 10px;

  & > img {
    width: 300px;
    height: 200px;

    border-radius: 8px;
    border: 3px solid var(--color-primary-50);

    object-fit: cover;
  }

  & > div {
    width: 100%;

    padding-top: 24px;

    & > h2 {
      font-weight: 600;
      font-size: 16px;
      line-height: 27px;

      padding-bottom: 16px;
    }

    & > p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;

      color: var(--grey-3);

      &:nth-child(3) {
        width: min-content;
        font-size: 12px;

        margin: 10px 0;
        padding: 4px 8px;

        border-radius: 16px;
        background-color: var(--grey-1);
      }
    }

    & > div {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > span {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;

        color: var(--grey-4);
      }
    }
  }
`;

export { Container };
