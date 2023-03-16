import styled, { css } from "styled-components";

interface IButtonStyle {
  color:
    | "pink"
    | "grey"
    | "grey-2"
    | "grey-3"
    | "green"
    | "product-2"
    | "product-3"
    | "product-4";
  size:
    | "small"
    | "small-2"
    | "medium"
    | "medium-2"
    | "medium-3"
    | "large"
    | "large-2"
    | "large-3"
    | "xlarge"
    | "xlarge-2"
    | "xlarge-3"
    | "padding";
}

const Container = styled.button<IButtonStyle>`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  transition: 0.5s;
  border-width: 1.5px;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          width: 31px;
          height: 30px;

          border-radius: 4px;
        `;

      case "small-2":
        return css`
          width: 38px;
          height: 38px;

          border-radius: 150px;
        `;

      case "medium":
        return css`
          width: 94px;
          height: 48px;

          border-radius: 32px;
        `;

      case "medium-2":
        return css`
          width: 100%;
          max-width: 175px;
          height: 48px;

          border-radius: 32px;
        `;

      case "medium-3":
        return css`
          width: 100%;
          max-width: 192px;
          height: 52px;

          border-radius: 32px;
        `;

      case "large":
        return css`
          width: 100%;
          max-width: 210px;
          height: 52px;

          border-radius: 32px;
        `;

      case "large-2":
        return css`
          width: 100%;
          max-width: 217px;
          height: 48px;

          border-radius: 32px;
        `;

      case "large-3":
        return css`
          width: 100%;
          max-width: 240px;
          height: 52px;

          border-radius: 32px;
        `;

      case "xlarge":
        return css`
          width: 100%;
          max-width: 421px;
          height: 60px;

          border-radius: 4px;
        `;

      case "xlarge-2":
        return css`
          width: 100%;
          max-width: 440px;
          height: 52px;

          border-radius: 32px;
        `;

      case "xlarge-3":
        return css`
          width: 100%;
          height: 60px;

          position: fixed;
          bottom: 0;
        `;

      case "padding":
        return css`
          padding: 15px 20px;

          border-radius: 32px;
        `;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "pink":
        return css`
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-white);

          &:hover {
            background-color: var(--color-primary-20);
            border-color: var(--color-primary-20);
          }
        `;

      case "grey":
        return css`
          background-color: var(--grey-1);
          border-color: var(--grey-1);
          color: var(--grey-4);

          &:hover {
            background-color: var(--grey-2);
            border-color: var(--grey-2);
          }
        `;

      case "grey-2":
        return css`
          background-color: var(--grey-2);
          border-color: var(--grey-2);
          color: var(--grey-3);
        `;

      case "grey-3":
        return css`
          background-color: var(--grey-1);
          border-color: var(--grey-1);
          color: var(--grey-3);

          &:hover {
            background-color: var(--grey-2);
            border-color: var(--grey-2);
          }
        `;

      case "green":
        return css`
          background-color: var(--color-secondary-50);
          border-color: var(--color-secondary-50);
          color: var(--color-secondary);

          &:hover {
            background-color: var(--color-secondary-20);
            border-color: var(--color-secondary-20);
            color: var(--color-secondary-50);
          }
        `;

      case "product-2":
        return css`
          background-color: var(--product-2);
          border-color: var(--product-2);
          color: var(--grey-4);

          &:hover {
            background-color: var(--product-5);
            border-color: var(--product-5);
          }
        `;

      case "product-3":
        return css`
          background-color: var(--product-3);
          border-color: var(--product-3);
          color: var(--grey-4);

          &:hover {
            background-color: var(--product-6);
            border-color: var(--product-6);
          }
        `;

      case "product-4":
        return css`
          background-color: var(--product-4);
          border-color: var(--product-4);
          color: var(--grey-4);

          &:hover {
            background-color: var(--product-7);
            border-color: var(--product-7);
          }
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
