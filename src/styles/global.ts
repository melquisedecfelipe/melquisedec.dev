import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle(
  ({ theme: { colors, media, size } }) => css`
    * {
      margin: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
      scroll-behavior: smooth;
    }

    h1 {
      color: ${colors.wheel.title};
      font-size: ${size(5)};
    }

    h2 {
      color: ${colors.wheel.title};
      font-size: ${size(3)};
    }

    h3 {
      color: ${colors.wheel.title};
      font-size: ${size(2.5)};
    }

    h4 {
      color: ${colors.wheel.title};
      font-size: ${size(2)};
    }

    p {
      color: ${colors.wheel.text};
      font-size: ${size(2)};
    }

    small {
      color: ${colors.wheel.text};
      font-size: ${size(1.5)};
      opacity: 0.75;
    }

    ${media.tablet(css`
      h1 {
        font-size: ${size(7)};
      }

      h2 {
        font-size: ${size(5)};
      }

      h3 {
        font-size: ${size(3)};
      }
    `)};

    a,
    button {
      color: ${colors.wheel.primary};
      transition: all 0.25s;
      cursor: pointer;

      &:hover {
        opacity: 0.75;
      }
    }
  `
)

export default GlobalStyles
