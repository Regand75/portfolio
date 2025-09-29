import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Icon} from "../../../components/icon/Icon.tsx";

const Main = styled.section`
    position: relative;
    padding-top: 123px;
    padding-bottom: 84px;
    min-height: calc(100vh - 215px);

    @media screen and (max-width: 710px) {
        padding-top: 80px;
    }

    @media screen and (max-width: 620px) {
        padding-bottom: 80px;
    }
`;

const MainFlexWrapper = styled(FlexWrapper)`
    padding-bottom: 151px;

    @media screen and (max-width: 768px) {
        padding-bottom: 84px;
    }
    
    @media screen and (max-width: 425px) {
        flex-direction: column;
    }
`;

const AfterContentFromBlock = styled(Icon)`
    position: absolute;
    top: 669px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const Info = styled.div`
    margin-top: 75px;
    max-width: 537px;

    @media screen and (max-width: 710px) {
        margin-top: 50px;
    }
    
    @media screen and (max-width: 620px) {
        margin-top: 20px;
    }
`;

const Title = styled.h1`
    margin-bottom: 32px;
    font-family: 'Fira Code', sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    color: ${({theme}) => theme.colors.primary};
    
    .primary {
        color: ${({theme}) => theme.colors.primary};
    }

    .tertiary {
        color: ${({theme}) => theme.colors.tertiary};
    }
    
    p {
        display: none;
    }
`;

const Description = styled.p`
    margin-bottom: 24px;
    font-family: 'Fira Code', sans-serif;
    line-height: 25px;
    color: ${({theme}) => theme.colors.secondary};
`;

const ImageWrapper = styled.div`
    max-width: 457px;
    max-height: 386px;
    position: relative;

    @media screen and (max-width: 360px) {
        margin-inline: auto;
        width: 92%;
    }
`;

const BeforeIcon = styled(Icon)`
    position: absolute;
    top: 84px;
    left: -8px;
    z-index: -1;

    @media screen and (max-width: 992px) {
        max-width: 126px;
        max-height: 126px;
    }

    @media screen and (max-width: 768px) {
        max-width: 100px;
        max-height: 100px;
    }

    @media screen and (max-width: 620px) {
        max-width: 70px;
        max-height: 70px;
    }
    
    @media screen and (max-width: 535px) {
        top: 54px;
    }

    @media screen and (max-width: 425px) {
        max-width: 120px;
        max-height: 120px;
        top: 84px;
        left: 0;
    }
    
    @media screen and (max-width: 360px) {
        max-width: 100px;
        max-height: 100px;
        top: 58px;
    }
`;

const AfterIcon = styled(Icon)`
    position: absolute;
    bottom: 55px;
    right: 15px;
    z-index: 2;

    @media screen and (max-width: 992px) {
        max-width: 70px;
        max-height: 70px;
        bottom: 70px;
    }

    @media screen and (max-width: 828px) {
        bottom: 100px;
    }
    
    @media screen and (max-width: 768px) {
        max-width: 60px;
        max-height: 60px;
    }

    @media screen and (max-width: 620px) {
        max-width: 40px;
        max-height: 40px;
    }

    @media screen and (max-width: 425px) {
        max-width: 80px;
        max-height: 80px;
    }

    @media screen and (max-width: 360px) {
        max-width: 60px;
        max-height: 60px;
        bottom: 96px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;

`;

const InfoWork = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 8px;
    max-width: 402px;
    margin-inline: auto;

    span {
        font-family: 'Fira Code', sans-serif;
        font-weight: 600;
        color: ${({theme}) => theme.colors.primary};
    }
`;

const InfoWorkBlock = styled.div`
    display: flex;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    background-color: ${({theme}) => theme.colors.tertiary};
`;

export const S = {
    Main,
    MainFlexWrapper,
    AfterContentFromBlock,
    Info,
    Title,
    Description,
    ImageWrapper,
    BeforeIcon,
    AfterIcon,
    Image,
    InfoWork,
    InfoWorkBlock,
}