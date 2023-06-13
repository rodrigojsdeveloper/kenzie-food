import drink from "../../assets/Icon_glass of wine.svg";
import fruit from "../../assets/Icon_fruits.svg";
import bread from "../../assets/Icon_bread.svg";
import { Container } from "./style";
import { Button } from "../Button";

const NavCategories = () => {
  return (
    <Container>
      <Button color="pink" size="padding">
        Todos
      </Button>
      <Button color="product-2" size="padding">
        <img src={bread} alt="bread" />
        Panificadora
      </Button>
      <Button color="product-3" size="padding">
        <img src={fruit} alt="fruit" />
        Frutas
      </Button>
      <Button color="product-4" size="padding">
        <img src={drink} alt="drink" />
        Bebidas
      </Button>
    </Container>
  );
};

export { NavCategories };
