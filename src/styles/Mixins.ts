import {css} from "styled-components";

export const hoverEffect = (withColor: boolean = false) => css`
  transition: filter 0.3s ease, fill 0.3s ease;

  &:hover {
    filter: drop-shadow(0 0 6px ${({ theme }) => theme.colors.secondary});
    ${withColor &&
css`
      color: ${({ theme }) => theme.colors.primary};
    `}
  }
`;

export const gridLayout = css`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

export const buttonViewAll = css`
    border: none;
    background-color: transparent;
    text-align: end;
    cursor: pointer;
    width: 117px;
    font-family: 'Fira Code', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.primary};
    line-height: 42px;

    &:hover {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;
