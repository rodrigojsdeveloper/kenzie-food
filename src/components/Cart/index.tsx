import { Container } from "./style";

const Cart = () => {
  return (
    <Container>
      <div>
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
      </div>

      <div>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L6 12V40C6 41.0609 6.42143 42.0783 7.17157 42.8284C7.92172 43.5786 8.93913 44 10 44H38C39.0609 44 40.0783 43.5786 40.8284 42.8284C41.5786 42.0783 42 41.0609 42 40V12L36 4H12Z"
            stroke="#868E96"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 12H42"
            stroke="#868E96"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 20C32 22.1217 31.1571 24.1566 29.6569 25.6569C28.1566 27.1571 26.1217 28 24 28C21.8783 28 19.8434 27.1571 18.3431 25.6569C16.8429 24.1566 16 22.1217 16 20"
            stroke="#868E96"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>Por enquanto não temos produtos no carrinho</p>
      </div>
    </Container>
  );
};

export { Cart };