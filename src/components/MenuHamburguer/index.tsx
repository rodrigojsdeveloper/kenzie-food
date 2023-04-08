import menu from "../../assets/icons8-menu-arredondado-50.png";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";

const MenuHamburger = () => {
  const navigate = useNavigate();

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
        <Button
          color="grey"
          size="medium-2"
          onClick={() => navigate("/signin")}
        >
          Logout
        </Button>
      </div>
    </Container>
  );
};

export { MenuHamburger };
