import styled, { css } from 'styled-components'

export const AboutContainer = styled.div(
  ({ theme: { media, size } }) => css`
    width: 100%;
    height: 100%;
    padding: ${size(2)} 0;

    ${media.tablet(css`
      padding: ${size(10)} ${size(5)};
    `)}

    ${media.desktop(css`
      max-width: 850px;
      margin: 0 auto;
    `)}
  `
)

export const Experience = styled.section(
  ({ theme: { colors, media, size } }) => css`
    padding: ${size(2)};

    ${media.tablet(css`
      padding: ${size(10)} 0;
    `)}

    > h4 {
      text-transform: uppercase;
      letter-spacing: ${size(0.5)};
      font-weight: 400;
      margin-bottom: ${size(5)};
    }

    > ul {
      list-style: none;
      padding-left: 0;

      > li {
        display: flex;
        margin-bottom: ${size(4)};
        position: relative;

        &::before {
          content: '';
          width: 1px;
          height: 100%;
          border-right: 1px solid ${colors.wheel.gray};
          position: absolute;
          left: 25px;
          top: 50px;
        }

        > img {
          width: 50px;
          height: 50px;
          border-radius: 5px;
        }

        > span {
          margin-left: ${size(4)};

          > p {
            margin-bottom: ${size(1)};
          }
        }
      }
    }
  `
)

export const Academic = styled.div(
  ({ theme: { media, size } }) => css`
    padding: ${size(2)};

    ${media.tablet(css`
      padding: ${size(10)} 0;
    `)}

    > h4 {
      text-transform: uppercase;
      letter-spacing: ${size(0.5)};
      font-weight: 400;
      margin-bottom: ${size(5)};
    }

    > ul {
      list-style: none;
      padding-left: 0;

      > li {
        display: flex;
        margin-bottom: ${size(4)};

        > img {
          width: 50px;
          height: 50px;
          border-radius: 5px;
        }

        > span {
          margin-left: ${size(4)};
        }
      }
    }
  `
)
