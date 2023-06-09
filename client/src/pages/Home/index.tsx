import { NavCategories } from "../../components/NavCategories";
import { ListProducts } from "../../components/ListProducts";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";
import { Container } from "./style";
import { useState } from "react";
import { CartMobile } from "../../components/CartMobile";

const Home = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <>
      {openCart ? <CartMobile /> : null}

      <Header />
      <Container>
        <div>
          <NavCategories />
          <ListProducts />
        </div>
        <Cart />

        <button onClick={() => setOpenCart(true)}>
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8135 8C12.0713 8 12.3057 7.83594 12.376 7.57812L13.4775 2.70312C13.5479 2.35156 13.29 2 12.915 2H3.72754L3.5166 0.96875C3.44629 0.710938 3.21191 0.5 2.9541 0.5H0.563477C0.235352 0.5 0.000976562 0.757812 0.000976562 1.0625V1.4375C0.000976562 1.76562 0.235352 2 0.563477 2H2.18066L3.84473 10.0625C3.42285 10.2969 3.1416 10.7422 3.18848 11.2812C3.21191 11.9375 3.75098 12.4766 4.43066 12.5C5.18066 12.5469 5.81348 11.9375 5.81348 11.1875C5.81348 10.8359 5.64941 10.5078 5.41504 10.25H10.3135C10.0791 10.5078 9.91504 10.8594 9.93848 11.2344C9.93848 11.9375 10.5244 12.5 11.2275 12.5C11.9541 12.5234 12.5635 11.9375 12.5635 11.1875C12.5635 10.6719 12.2588 10.2266 11.8135 10.0156L11.9307 9.45312C12.0244 9.10156 11.7432 8.75 11.3916 8.75H5.11035L4.94629 8H11.8135ZM9.44629 5C9.68066 5 9.82129 5.30469 9.63379 5.49219L8.06348 7.0625C7.94629 7.17969 7.78223 7.17969 7.66504 7.0625L6.09473 5.49219C5.90723 5.30469 6.04785 5 6.28223 5H7.31348V3.59375C7.31348 3.45312 7.43066 3.3125 7.59473 3.3125H8.15723C8.29785 3.3125 8.43848 3.45312 8.43848 3.59375V5H9.44629Z"
              fill="white"
            />
          </svg>

          <p>Carrinho</p>
        </button>
      </Container>
    </>
  );
};

export { Home };
