import { NavCategories } from "../../components/NavCategories";
import { ListProducts } from "../../components/ListProducts";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";
import { Container } from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <NavCategories />
          <ListProducts />
        </div>
        <Cart />
      </Container>
    </>
  );
};

export { Home };
