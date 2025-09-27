import styled from "styled-components";
import {FlexWrapper} from "../../components/common/FlexWrapper.ts";
import {hoverEffect} from "../../styles/Mixins.ts";
import {IconsList} from "../../components/common/IconsList.tsx";

const Footer = styled.footer`;
    padding: 32px 0;
    border-top: 1px solid ${({theme}) => theme.colors.secondary};
`;

const FooterFlexWrapper = styled(FlexWrapper)`
    @media screen and (max-width: 425px) {
        flex-direction: column;
    }
`;

const LinkEmail = styled.a`
    font-family: 'Fira Code', sans-serif;
    color: ${({theme}) => theme.colors.secondary};
    cursor: pointer;
    ${hoverEffect(true)};
`;

const Skills = styled.div`
    color: ${({theme}) => theme.colors.primary};
`;

const Text = styled.div`
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: ${({theme}) => theme.colors.primary};
`;

const IconsListFlex = styled(IconsList)`
    display: flex;
    gap: 8px;
`;

const Copyright = styled.div`
    margin-top: 48px;
    margin-inline: auto;
    text-align: center;
    justify-self: end;
    font-family: 'Fira Code', sans-serif;
    color: ${({theme}) => theme.colors.secondary};
`;

export const S = {
    Footer,
    FooterFlexWrapper,
    LinkEmail,
    Skills,
    Text,
    IconsListFlex,
    Copyright,
}