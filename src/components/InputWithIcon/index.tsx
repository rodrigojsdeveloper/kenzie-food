import { Container } from "./style";

const InputWithIcon = () => {
  return (
    <Container>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.25 14.75C11.5637 14.75 14.25 12.0637 14.25 8.75C14.25 5.43629 11.5637 2.75 8.25 2.75C4.93629 2.75 2.25 5.43629 2.25 8.75C2.25 12.0637 4.93629 14.75 8.25 14.75Z"
          stroke="#868E96"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.7508 16.2498L12.4883 12.9873"
          stroke="#868E96"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <input
        type="text"
        autoComplete="off"
        required={true}
        placeholder="Pesquisar por produto"
      />
    </Container>
  );
};

export { InputWithIcon };
