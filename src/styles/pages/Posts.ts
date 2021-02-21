import styled, { css } from 'styled-components'

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

export const PostsContainer = styled.div(
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
