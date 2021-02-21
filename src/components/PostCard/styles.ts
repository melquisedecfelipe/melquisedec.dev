import styled, { css } from 'styled-components'

export const PostCardContainer = styled.div(
  ({ theme: { colors } }) => css`
    flex: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;

    > img {
      width: 100%;
      height: auto;
    }

    > h4 {
      transition: all 0.25s;
    }

    &:hover {
      > h4 {
        color: ${colors.wheel.primary};
      }
    }
  `
)

export const PostCardSimpleContainer = styled.div(
  ({ theme: { colors, size } }) => css`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: ${size(2)};

    > h4 {
      transition: all 0.25s;
    }

    > small {
      margin-top: ${size(2)};
    }

    > hr {
      transition: all 0.25s;
      border: 1px solid ${colors.wheel.gray};
      margin-bottom: ${size(2)};
    }

    &:hover {
      > h4 {
        color: ${colors.wheel.primary};
      }

      > hr {
        border-color: ${colors.wheel.primary};
      }
    }
  `
)
