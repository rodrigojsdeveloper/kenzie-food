import { Link } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";

const FormSignUp = () => {
  return (
    <Container>
      <div>
        <h2>Cadastro</h2>
        <Link to="/signin">Retornar para login</Link>
      </div>

      <form>
        <Input label="Nome" type="text" />
        <Input label="Email" type="email" />
        <Input label="Senha" type="password" />

        <Button color="grey-3" size="xlarge" type="submit">
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};

export { FormSignUp };
