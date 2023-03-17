import menu from "../../assets/icons8-menu-arredondado-50.png";
import { Container } from "./style";
import { useState } from "react";
import { Button } from "../Button";

const MenuHamburger = () => {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  return (
    <Container>
      <img
        src={menu}
        alt="menu"
        onClick={() => {
          setCheckbox(true);
          if (checkbox) {
            setCheckbox(false);
          }
        }}
      />

      <div className={checkbox ? "menuOpen" : "menuClose"}>
        <h2>Menu</h2>
        <hr />
        <Button color="grey" size="medium-2">
          Logout
        </Button>
      </div>
    </Container>
  );
};

export { MenuHamburger };
