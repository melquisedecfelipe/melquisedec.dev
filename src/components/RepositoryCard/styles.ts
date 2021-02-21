import styled, { css } from 'styled-components'

export const RepositoryCardContainer = styled.a(
  ({ theme: { colors, size } }) => css`
    display: flex;
    cursor: pointer;
    text-decoration: none;

    > div {
      display: flex;
      flex-direction: column;
      background: ${colors.wheel.gray};
      width: 100%;
      height: 100%;
      padding: ${size(2)};
      border-radius: 5px;

      > span {
        margin-top: ${size(1)};
        color: ${colors.wheel.text};
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: ${size(2)};
      }
    }
  `
)
