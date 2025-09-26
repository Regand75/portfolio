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
