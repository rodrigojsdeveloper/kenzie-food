import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Inter', sans-serif;
  }

  :root {
    // Primary Palette
    --color-primary: #FF2253;
    --color-primary-20: #B6314E;
    --color-primary-50: #FFE9EE;
    --color-secondary: #4ACA94;
    --color-secondary-20: #39DF8F;
    --color-secondary-50: #E4F7EF;
    
    // Product Palette
    --product-1: #EEF6FF;
    --product-2: #FFF7F4;
    --product-3: #FFE4EA;
    --product-4: #F3EEF5;

    --product-5: #F3D9CF;
    --product-6: #EEB7C3;
    --product-7: #E2C6EE;
  
    // Grey Scale Palette
    --grey-1: #F8F9FA;
    --grey-2: #E9ECEF;
    --grey-3: #868E96;
    --grey-4: #212529;
    --grey-5: #DEE2E6;

    // Colors default
    --color-white: #FFFFFF;
    --color-black: #000000;
    --transparent: transparent;

    // Shadow
    --shadow-1: rgba(0, 0, 0, 0.5);
    --shadow-2: rgba(0, 0, 0, 0.15);
    --shadow-3: rgba(0, 0, 0, 0.25);
  }

  body {
    background-color: var(--color-white);
    color: var(--color-black);
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
