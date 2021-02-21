import styled, { css } from 'styled-components'

interface ReadProgressProps {
  height: string
}

export const MorePosts = styled.section(
  ({ theme: { colors, media, size } }) => css`
    width: 100%;
    background: ${colors.wheel.gray};

    > div {
      padding: ${size(5)} ${size(2)};

      ${media.tablet(css`
        padding: ${size(5)};
      `)}

      ${media.desktop(css`
        max-width: 850px;
        margin: 0 auto;
      `)}
    }
  `
)

export const PostArticle = styled.article(
  ({ theme: { colors, size } }) => css`
    > hr {
      border: 1px solid ${colors.wheel.gray};
      margin-bottom: ${size(2)};
    }

    & h1 {
      margin-bottom: ${size(2)};
    }

    & h2,
    & h3,
    & h4 {
      margin: ${size(5)} 0 ${size(2)} 0;
    }

    & p {
      line-height: ${size(4)};
    }

    & img {
      margin-top: ${size(2)};
    }

    & blockquote {
      background: ${colors.wheel.gray};
      padding: ${size(3)};
      margin: ${size(2)} 0;
      border-radius: 5px;

      & p {
        display: inline;
      }

      &::before {
        color: ${colors.wheel.title};
        content: open-quote;
        font-size: ${size(10)};
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
      }
    }

    & pre {
      background: ${colors.code.background};
      padding: ${size(3)};
      margin: ${size(2)} 0;
      white-space: pre-wrap;
      overflow-x: auto;
      border-radius: 5px;

      > code {
        color: ${colors.code.text};
        font-weight: 400;

        &:before {
          content: '';
        }

        &:after {
          content: '';
        }
      }
    }

    & code {
      color: ${colors.wheel.title};
      font-weight: 700;
      tab-size: 2;
      font-family: 'JetBrains Mono', monospace;

      &:before {
        content: '\`';
      }

      &:after {
        content: '\`';
      }
    }

    & ul {
      list-style-type: square;
      font-size: ${size(2)};
      list-style-position: inside;
      padding-left: 0;
    }

    & li {
      font-size: ${size(2)};
      line-height: 24px;
      color: ${colors.wheel.text};
    }
  `
)

export const PostDetail = styled.section(
  ({ theme: { colors, media, size } }) => css`
    width: 100%;
    padding: ${size(5)} ${size(2)};

    ${media.tablet(css`
      padding: ${size(5)};
    `)}

    ${media.desktop(css`
      max-width: 850px;
      margin: 0 auto;
    `)}

    > section {
      display: flex;
      flex-direction: column;
      margin: ${size(2)} 0;

      > span {
        display: flex;
        align-items: center;
        margin: ${size(2)} 0;

        > img {
          height: 50px;
          width: 50px;
          border-radius: 50%;
        }

        > p {
          margin-left: ${size(2)};
        }
      }
    }
  `
)

export const PostGrid = styled.div(
  ({ theme: { size } }) => css`
    display: grid;
    grid-template-columns: 1fr 4px;
    grid-gap: ${size(5)};
    margin-bottom: ${size(5)};
  `
)

export const ReadContainer = styled.div(
  ({ theme: { colors, size } }) => css`
    width: 4px;
    height: 200px;
    background: ${colors.wheel.gray};
    position: -webkit-sticky;
    position: sticky;
    top: ${size(5)};
  `
)
export const ReadProgress = styled.div<ReadProgressProps>(
  ({ theme: { colors }, height }) => css`
    width: 100%;
    height: ${height || '0px'};
    max-height: 200px;
    background: ${colors.wheel.title};
    transition: all 0.5s;
  `
)

export const SharedButtons = styled.aside(
  ({ theme: { colors, size } }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${size(2)};

    > h4 {
      text-transform: uppercase;
      letter-spacing: ${size(0.5)};
      font-weight: 400;
      margin: 0 !important;
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: ${size(2)};
      color: ${colors.wheel.title} !important;
    }
  `
)
