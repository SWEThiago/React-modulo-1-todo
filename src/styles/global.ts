import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #262626;

    --gray-100: #F2F2F2;
    --gray-200: #D9D9D9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1A1A1A;
    --gray-700: #0D0D0D;

    --purple: #8284FA;
    --purple-dark: #5E60CE;
    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;
    --danger: #E25858;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
              // 1 rem = 16 px
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //  14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
