import styled from "styled-components";

const Header = styled.header`
    padding: 32px 0 8px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background-color: ${({theme}) => theme.colors.background};

    @media screen and (max-width: 650px) {
        padding-top: 16px;
    }
`;

export const S = {
    Header,
};