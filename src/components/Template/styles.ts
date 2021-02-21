import styled, { css } from 'styled-components'

interface HeroProps {
  image: string
}

export const About = styled.section(
  ({ theme: { colors, media, size } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1;
    padding: ${size(2)};

    ${media.tablet(css`
      padding: ${size(5)};
    `)}

    ${media.desktop(css`
      max-width: 850px;
      margin: 0 auto;
    `)}

    &::before {
      content: '01001111 01101100 11100001 00100000 01001101 01110101 01101110 01100100 01101111 00100001';
      color: ${colors.wheel.purple};
      font-size: ${size(5)};
      font-family: 'JetBrains Mono', monospace;
      position: absolute;
      bottom: 0;
      text-align: right;
      opacity: 0.5;
      padding: ${size(2)};
      z-index: -1;

      ${media.tablet(css`
        padding: ${size(5)};
        opacity: 1;
      `)}
    }

    > code {
      color: ${colors.white};
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;

      &:before {
        content: '\`';
      }

      &:after {
        content: '\`';
      }
    }

    > h1 {
      color: ${colors.white};
      width: 200px;
    }
  `
)

export const Footer = styled.section(
  ({ theme: { colors, media, size } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${colors.black};
    border-top: 2px solid ${colors.wheel.purple};

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: ${size(5)} ${size(2)};

      ${media.tablet(css`
        padding: ${size(5)};
      `)}

      ${media.desktop(css`
        max-width: 850px;
        margin: 0 auto;
      `)};

      > section {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-bottom: ${size(5)};

        & h4 {
          text-transform: uppercase;
          letter-spacing: ${size(0.5)};
          font-weight: 400;
          margin-bottom: ${size(2)};
          color: ${colors.white};
        }

        & a {
          color: ${colors.white};

          > svg {
            margin-right: ${size(1)};
          }
        }

        & ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          list-style: none;
          padding-left: 0;
        }
      }

      > small {
        color: ${colors.white};
      }
    }
  `
)

export const Hero = styled.div<HeroProps>(
  ({ theme: { colors, media, size }, image }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 700px;
    background: linear-gradient(-30deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.6)),
      url(${image});
    background-size: cover;
    background-position: center;
    position: relative;
    border-bottom: 2px solid ${colors.wheel.purple};

    > h1 {
      text-align: center;
      max-width: 950px;
      color: ${colors.white};
      padding: ${size(2)};

      ${media.tablet(css`
        padding: ${size(5)};
      `)}
    }
  `
)

export const Navbar = styled.nav(
  ({ theme: { colors, media, size } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${size(2)};
    position: absolute;
    width: 100%;
    top: ${size(2)};

    ${media.tablet(css`
      padding: ${size(5)};
    `)}

    ${media.desktop(css`
      max-width: 850px;
      margin: 0 auto;
    `)}

    > h4 {
      color: ${colors.white};
    }

    > ul {
      list-style: none;
      padding-left: 0;
      display: flex;

      > li {
        margin-right: ${size(2)};

        > a {
          color: ${colors.white};
          text-decoration: none;
        }
      }
    }
  `
)

export const PostInfo = styled.div(
  ({ theme: { colors, media, size } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1;
    padding: ${size(2)};

    ${media.tablet(css`
      padding: ${size(5)};
    `)}

    ${media.desktop(css`
      max-width: 850px;
      margin: 0 auto;
    `)}

    > h1 {
      color: ${colors.white};
      text-align: center;
    }

    > span {
      display: flex;
      justify-content: flex-end;

      > small {
        color: ${colors.white};
        position: absolute;
        bottom: ${size(7)};
        opacity: 1;
      }
    }
  `
)

export const TemplateContainer = styled.div`
  flex: 1;
`
