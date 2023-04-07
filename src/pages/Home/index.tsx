import { NavCategories } from "../../components/NavCategories";
import { ListProducts } from "../../components/ListProducts";
import { Header } from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <NavCategories />
      <ListProducts />
    </>
  );
};

export { Home };
