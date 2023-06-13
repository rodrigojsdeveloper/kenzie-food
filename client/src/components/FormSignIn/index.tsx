import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";

const FormSignIn = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h2>Login</h2>

      <form>
        <Input label="Email" type="email" />
        <Input label="Senha" type="password" />

        <Button color="pink" size="xlarge" type="submit">
          Entrar
        </Button>

        <p>Ainda não tem conta?</p>

        <Button
          color="grey-3"
          size="xlarge"
          type="button"
          onClick={() => navigate("/signup")}
        >
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};

export { FormSignIn };
