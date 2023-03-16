import { Container } from "./style";

interface IButton {
  children: React.ReactNode;
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
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  children,
  color,
  size,
  onClick,
  type,
  disabled,
}: IButton) => {
  return (
    <Container
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </Container>
  );
};

export { Button };
