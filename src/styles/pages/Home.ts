import styled, { css } from 'styled-components'

export const About = styled.section(
  ({ theme: { media, size } }) => css`
    padding: ${size(2)};

    ${media.tablet(css`
      padding: ${size(5)} 0;
    `)}

    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1;
  `
)

export const Blog = styled.section(
  ({ theme: { media, size } }) => css`
    padding: ${size(2)};

    ${media.tablet(css`
      padding: ${size(5)} 0;
    `)}

    > h4 {
      text-transform: uppercase;
      letter-spacing: ${size(0.5)};
      font-weight: 400;
      margin-bottom: ${size(5)};
    }
  `
)

export const HomeContainer = styled.div(
  ({ theme: { media, size } }) => css`
    width: 100%;
    padding: ${size(2)} 0;

    ${media.tablet(css`
      padding: ${size(5)};
    `)}

    ${media.desktop(css`
      max-width: 850px;
      margin: 0 auto;
    `)}
  `
)

export const Project = styled.section(
  ({ theme: { media, size } }) => css`
    padding: ${size(2)};

    ${media.tablet(css`
      padding: ${size(5)} 0;
    `)}

    > h4 {
      text-transform: uppercase;
      letter-spacing: ${size(0.5)};
      font-weight: 400;
      margin-bottom: ${size(5)};
    }

    > div {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: ${size(2)};

      ${media.tablet(css`
        grid-template-columns: repeat(2, 1fr);
      `)}
    }
  `
)
