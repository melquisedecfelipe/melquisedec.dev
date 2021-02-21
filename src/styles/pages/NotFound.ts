import styled, { css } from 'styled-components'

export const NotFoundContainer = styled.div(
  ({ theme: { media, size } }) => css`
    width: 100%;
    padding: ${size(2)};

    ${media.tablet(css`
      padding: ${size(10)} ${size(5)};
    `)}

    ${media.desktop(css`
      max-width: 850px;
      margin: 0 auto;
    `)}

    > div {
      padding: ${size(4)} 0;

      > h2 {
        font-weight: 700;
      }
    }
  `
)
